import {View, FlatList, Dimensions, StatusBar} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useGetYoutubeDataQuery} from '../../../../redux/api/Youtube/youtubeDataApi';
import YoutubePlayer from '@dooboo/react-native-youtube-iframe';
import styles from './styles';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {Image} from 'react-native';
import {IMAGES} from '../../../../constants';

const {width, height} = Dimensions.get('window');

const shortsList = [
  {id: 1, videoId: 'yuuUpyvYML4'},
  {id: 2, videoId: 'DLJzFnY9ugQ'},
  {id: 3, videoId: 'cWHNyyiB5nA'},
  {id: 4, videoId: 'B5IVKUd3suA'},
  {id: 5, videoId: 'bBpvna3PbrE'},
  {id: 6, videoId: '2TiJke4IF-E'},
  {id: 7, videoId: 'ZR0wDoFl_PU'},
  {id: 8, videoId: '4iY_EKZUnKg'},
  {id: 9, videoId: 'kA4TG6lsnbo'},
  {id: 10, videoId: 'fA4ffCUWjG4'},
  {id: 11, videoId: 'PIexuFD-Rvo'},
  {id: 12, videoId: 'QDiNo8iYBBU'},
  {id: 13, videoId: 'nX4vFWKLRMo'},
  {id: 14, videoId: '8Mn5jhN6_Ks'},
  {id: 15, videoId: 'LkN7mktyk50'},
  {id: 16, videoId: '4UAH2dWtEd0'},
  {id: 17, videoId: 'Ur6n5AjC948'},
  {id: 18, videoId: 'ToJL5ypzUfM'},
  {id: 19, videoId: 'E9FA51gW0Bs'},
  {id: 20, videoId: 'zXzE6oC8_J0'},
];

const ShortVideoScreen = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isScreenFocused, setIsScreenFocused] = useState(false);
  const [layout, setLayout] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  // Initialize loading state for each video
  const [loadingVideos, setLoadingVideos] = useState(
    shortsList.reduce((acc, item) => {
      acc[item.id] = true; // Set all videos to loading initially
      return acc;
    }, {}),
  );

  const onViewRef = useRef(viewableItems => {
    if (viewableItems?.viewableItems?.length > 0) {
      const index = viewableItems?.viewableItems?.[0]?.index;
      setVisibleIndex(index);
    }
  });

  const searchTerm = 'news';
  const {colors, dark} = useTheme();
  const {isLoading, data, error} = useGetYoutubeDataQuery({
    searchTerm,
    maxResults: 20,
    order: 'date',
    videoDuration: 'short',
  });
  const flatListRef = useRef(null);
  const youtubePlayerRef = useRef(null);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const changeStatusBar = () => {
    StatusBar.setBackgroundColor('black', true);
    StatusBar.setBarStyle('light-content', true);
  };

  const changeStatusBarToInitial = () => {
    StatusBar.setBackgroundColor(colors.background, true);
    StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
  };

  useFocusEffect(
    useCallback(() => {
      changeStatusBar();
      setIsScreenFocused(true);
      return () => {
        changeStatusBarToInitial();
        setIsScreenFocused(false);
      };
    }, []),
  );

  const handleVideoReady = id => {
    setLoadingVideos(prev => ({...prev, [id]: false})); // Set loading state to false when video is ready
  };

  const renderItem = useCallback(
    ({item}) => {
      return (
        <>
          {loadingVideos[item.id] && (
            <Image
              source={IMAGES.SHORT_PLAY}
              style={{
                width: layout.width,
                height: layout.height,
                resizeMode: 'cover',
              }}
            />
          )}
          <YoutubePlayer
            key={item.id}
            ref={youtubePlayerRef}
            height={layout.height}
            width={layout.width}
            videoId={item?.videoId}
            play={isScreenFocused && item.id === shortsList[visibleIndex]?.id}
            onChangeState={event => {
              if (
                event === 'ended' &&
                item.id === shortsList[visibleIndex]?.id
              ) {
                youtubePlayerRef?.current?.seekTo(0, true);
              }
            }}
            onReady={() => handleVideoReady(item.id)} // Call when the video is ready
            webViewProps={{
              injectedJavaScript: `
                  var element = document.getElementsByClassName('container')[0];
                  element.style.position = 'unset';
                  true;
                `,
            }}
          />
        </>
      );
    },
    [layout, visibleIndex, loadingVideos, isScreenFocused],
  );

  const videos = data?.items || [];

  return (
    <View style={styles.container}>
      <View
        style={styles.shortContainer}
        onLayout={e => {
          setLayout(e.nativeEvent.layout);
        }}>
        {isLoading && (
          <Image source={IMAGES.SHORT_PLAY} width={width} height={height} />
        )}
        <FlatList
          ref={flatListRef}
          data={shortsList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id.toString()}
          refreshing={false}
          decelerationRate="fast"
          renderItem={renderItem}
          onViewableItemsChanged={onViewRef.current}
          pagingEnabled
          viewabilityConfig={viewabilityConfig}
        />
      </View>
    </View>
  );
};

export default ShortVideoScreen;
