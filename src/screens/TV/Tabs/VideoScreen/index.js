import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useGetYoutubeDataQuery} from '../../../../redux/api/Youtube/youtubeDataApi';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Loader} from '../../../../components/Common';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {moderateScale, verticalScale} from '../../../../styles/metrics';
import VideoPlayer from '../../../../components/News/VideoPlayer';

const VideoScreen = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [categories, setCategories] = useState([
    {id: 1, name: 'For You'},
    {id: 2, name: 'Cricket Updates'},
    {id: 3, name: 'Elections'},
    {id: 4, name: 'Business'},
    {id: 5, name: 'Sci & Tech'},
    {id: 6, name: 'Lifestyle'},
    {id: 7, name: 'Latest News'},
    {id: 8, name: 'Sports'},
    {id: 9, name: 'Entertainment'},
    {id: 10, name: 'Automobile'},
    {id: 11, name: 'Health'},
    {id: 12, name: 'Education'},
    {id: 13, name: 'Astrology'},
  ]);
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const query = newsTopics[0]?.name;
  const [activeCategory, setActiveCategory] = useState('For You');
  const [searchQuery, setSearchQuery] = useState(query);
  const [loader, setLoader] = useState(true);
  const [categoryLoader, setCategoryLoader] = useState(false);
  const [playing, setPlaying] = useState(false);
  const {data, isLoading, error, refetch} = useGetYoutubeDataQuery({
    searchTerm: searchQuery,
    maxResults: 20,
    order: 'date',
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (activeCategory === 'For You') {
      setSearchQuery(`${query} news`);
    } else {
      setSearchQuery(`${activeCategory} news`);
    }
    setCategoryLoader(true);
    refetch();
  }, [activeCategory, query]);

  useEffect(() => {
    if (!isLoading) {
      setCategoryLoader(false); // Hide category loader once data is fetched
    }
  }, [isLoading]);

  const handleCategoryPress = categoryName => {
    setActiveCategory(categoryName);
  };

  // Handler to track fully visible items in the viewport
  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setVisibleVideoIndex(viewableItems[0].index);
    }
  }, []);

  // Configuration for viewability of items
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100, // Only consider an item visible when fully in view
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryHeader}>
        <FlatList
          data={categories}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={[
                styles.category,
                {
                  backgroundColor: colors.tileBackground,
                  borderColor:
                    activeCategory === item.name
                      ? colors.border
                      : colors.background,
                },
              ]}
              onPress={() => handleCategoryPress(item.name)}>
              <Text style={[styles.categoryLabel, {color: colors.tileText}]}>
                {item.name}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={{gap: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={colors.bulletinBackground}
            colors={[colors.border]}
          />
        }
        contentContainerStyle={styles.videoList}
        showsVerticalScrollIndicator={false}>
        {data &&
          data?.items?.map((video, index) => (
            <VideoPlayer
              loader={loader || isLoading}
              setLoader={setLoader}
              key={index}
              videoId={video?.id?.videoId}
              playing={playing}
              setPlaying={setPlaying}
              borderRadius={moderateScale(20)}
            />
          ))}
      </ScrollView> */}
      {categoryLoader ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : (
        <FlatList
          data={data?.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <VideoPlayer
              loader={loader || isLoading}
              setLoader={setLoader}
              videoId={item?.id?.videoId}
              playing={index === visibleVideoIndex} // Only play if it's the visible video
              setPlaying={isPlaying => {
                // Toggle playing state for the current visible video
                if (isPlaying && index !== visibleVideoIndex) {
                  setVisibleVideoIndex(index);
                }
              }}
              borderRadius={moderateScale(20)}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={colors.bulletinBackground}
              colors={[colors.border]}
            />
          }
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          contentContainerStyle={styles.videoList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default VideoScreen;
