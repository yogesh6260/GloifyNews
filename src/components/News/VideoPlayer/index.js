import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {verticalScale} from '../../../styles/metrics';
import styles from './styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from '@react-navigation/native';

const VideoPlayer = ({
  videoId,
  loader,
  setLoader,
  onFullScreenChange,
  playing,
  setPlaying,
  borderRadius,
}) => {
  const [title, setTitle] = useState('');

  const playerRef = useRef();
  const {colors} = useTheme();
  useEffect(() => {
    getYoutubeMeta(videoId).then(meta => {
      setTitle(meta.title);
      setLoader(false);
    });
  }, [videoId]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setLoader(false);
      setPlaying(false);
    } else if (state === 'buffering') {
      setLoader(false);
    } else {
      setLoader(false);
    }
  }, []);

  return (
    <>
      {loader ? (
        <SkeletonPlaceholder borderRadius={borderRadius}>
          <SkeletonPlaceholder.Item
            width="100%"
            height={verticalScale(230)}
            style={{marginVertical: verticalScale(10)}}
          />
        </SkeletonPlaceholder>
      ) : (
        <View
          style={[
            styles.videoPlayer,
            {
              backgroundColor: colors.bulletinBackground,
              borderRadius: borderRadius,
            },
          ]}>
          <YoutubePlayer
            ref={playerRef}
            width={'100%'}
            height={verticalScale(230)}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
            webViewStyle={styles.TV}
            onFullScreenChange={onFullScreenChange}
            webViewProps={{containerStyle: {borderRadius: borderRadius}}}
            forceAndroidAutoplay={false}
          />
          <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
        </View>
      )}
    </>
  );
};

export default VideoPlayer;
