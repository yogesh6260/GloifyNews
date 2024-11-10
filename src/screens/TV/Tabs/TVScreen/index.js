import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';
import {ICONS, IMAGES} from '../../../../constants';
import {Button} from '../../../../components/Common';
import RNOrientationDirector, {
  Orientation,
} from 'react-native-orientation-director';
import VideoPlayer from '../../../../components/News/VideoPlayer';

const TVScreen = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  const [loader, setLoader] = useState(true);
  const [videoId, setVideoId] = useState('Nq2wYlWFucg');

  const {colors} = useTheme();

  useFocusEffect(
    useCallback(() => {
      setPlaying(true);

      return () => setPlaying(false);
    }, []),
  );

  const channelList = [
    {
      id: '1',
      name: 'Aaj Tak',
      icon: IMAGES.AAJTAK,
      liveVideoId: 'Nq2wYlWFucg',
    },
    {
      id: '2',
      name: 'Zee News',
      icon: IMAGES.ZEE_NEWS,
      liveVideoId: 'TPcmrPrygDc',
    },
    {
      id: '3',
      name: 'India TV',
      icon: IMAGES.INDIA_TV,
      liveVideoId: 'Xmm3Kr5P1Uw',
    },
    {
      id: '4',
      name: 'News Nation',
      icon: IMAGES.NEWS_NATION,
      liveVideoId: 'cEjuoCwX9jU',
    },
    {
      id: '5',
      name: 'Times Now',
      icon: IMAGES.TIMES_NOW,
      liveVideoId: '0S46SsugRNY',
    },
    {
      id: '6',
      name: 'CNN News',
      icon: IMAGES.CNN_NEWS,
      liveVideoId: 'rfDx1HMvXbQ',
    },
    {
      id: '7',
      name: 'CNBC',
      icon: IMAGES.CNBC,
      liveVideoId: 'TD0A7fHAxKw',
    },
    {
      id: '8',
      name: 'NDTV',
      icon: IMAGES.NDTV,
      liveVideoId: 'MN8p-Vrn6G0',
    },
    {
      id: '9',
      name: 'Republic Bharat',
      icon: IMAGES.REPUBLIC_BHARAT,
      liveVideoId: 'ZwD3-hUQ3rk',
    },
    {
      id: '10',
      name: 'News 24',
      icon: IMAGES.NEWS_24,
      liveVideoId: 'wRugKdhD2Bg',
    },
    {
      id: '11',
      name: 'News 18',
      icon: IMAGES.NEWS_18,
      liveVideoId: 'HBorWH77wPs',
    },
    {
      id: '12',
      name: 'ET Now',
      icon: IMAGES.ET_NOW,
      liveVideoId: 'MTuqrLy--6g',
    },
    {
      id: '13',
      name: 'DD News',
      icon: IMAGES.DD_NEWS,
      liveVideoId: 'llE9XzYrYBs',
    },
    {
      id: '14',
      name: 'ABP News',
      icon: IMAGES.ABP_NEWS,
      liveVideoId: 'nyd-xznCpJc',
    },
  ];

  const onChannelPress = liveVideoId => {
    setVideoId(liveVideoId);
    setLoader(true);
    setPlaying(true);
  };

  const onFullScreenChange = isFullscreen => {
    if (isFullscreen) {
      setOrientationToLandscape();
    } else {
      setOrientationToPortrait();
    }
  };

  const setOrientationToLandscape = () => {
    RNOrientationDirector.lockTo(Orientation.landscapeRight);
  };

  const setOrientationToPortrait = () => {
    RNOrientationDirector.lockTo(Orientation.portrait);
  };

  return (
    <View style={styles.container}>
      <VideoPlayer
        loader={loader}
        setLoader={setLoader}
        onFullScreenChange={onFullScreenChange}
        videoId={videoId}
        playing={playing}
        setPlaying={setPlaying}
        borderRadius={0}
      />
      <View style={styles.channelList}>
        <FlatList
          data={channelList}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={[
                styles.channelBtn,
                {backgroundColor: colors.bulletinBackground},
              ]}
              android_ripple={{
                color: 'lightgray',
                borderless: true,
                radius: moderateScale(45),
              }}
              onPress={() => onChannelPress(item.liveVideoId)}>
              {videoId === item.liveVideoId ? (
                <Image
                  source={ICONS.PIN}
                  style={[styles.pin, {backgroundColor: colors.border}]}
                />
              ) : null}
              <Image source={item.icon} style={styles.channelImg} />
              <Text style={[styles.channelName, {color: colors.text}]}>
                {item.name}
              </Text>
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.channelContainer}
        />
      </View>
      <View style={styles.placeholder}>
        <Text style={[styles.placeholderText, {color: colors.icon}]}>
          Looking for more content?
        </Text>
        <Button
          text={'Explore Videos'}
          width={horizontalScale(230)}
          height={verticalScale(55)}
          bgColor={colors.btnBackground}
          variant="elevated"
          borderRadius={moderateScale(30)}
          onPress={() => navigation.navigate('Videos')}
        />
      </View>
    </View>
  );
};

export default TVScreen;
