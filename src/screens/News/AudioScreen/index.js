import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
import {useTheme} from '@react-navigation/native';
import {IMAGES} from '../../../constants/Images';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';
import {VolumeManager} from 'react-native-volume-manager';

const AudioScreen = ({navigation, route}) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(1); // Default volume level (1.0 = max)
  const {colors} = useTheme();
  const {title, news, urlToImg} = route.params;

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      // Reset play state when the screen is focused
      setPlay(false);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      // Stop the audio when screen loses focus
      Tts.stop();
    });

    return () => {
      // Clean up listeners on unmount
      unsubscribeFocus();
      unsubscribeBlur();
      Tts.stop(); // Ensure audio stops on unmount
    };
  }, [navigation]);

  useEffect(() => {
    Tts.setDucking(true);
    Tts.setDefaultLanguage('en-IN');
    // Tts.setDefaultVoice('en-gb-x-gbb-network');
    Tts.setDefaultRate(0.4);

    VolumeManager.getVolume().then(initialVolume => {
      setVolume(Number(initialVolume.volume)); // Ensure it's a number
    });

    Tts.addEventListener('tts-finish', () => {
      setPlay(false); // Reset the play button when audio completes
    });

    return () => {
      Tts.stop(); // Stop the audio when the component unmounts
      Tts.removeEventListener('tts-finish');
    };
  }, []);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(1);
  }, []);

  const handlePlay = () => {
    setPlay(true);
    Tts.speak(news, {
      onProgress: event => {
        setCurrentTime(event.currentTime / 1000);
      },
    });
    setDuration(news.split(' ').length / 2); // Example duration calculation
  };

  const handleStop = () => {
    setPlay(false);
    Tts.stop();
    setCurrentTime(0);
  };

  const handleSeek = value => {
    setCurrentTime(value);
    Tts.stop();
    Tts.speak(news, {startTime: value * 1000});
  };

  const handleVolumeChange = value => {
    const volumeValue = Number(value); // Ensure it's a number
    setVolume(volumeValue);
    VolumeManager.setVolume(volumeValue, {type: 'music'});
  };

  const handleForward = () => {
    let newTime = currentTime + 10;
    if (newTime > duration) {
      newTime = duration;
    }
    handleSeek(newTime);
  };

  const handleReverse = () => {
    let newTime = currentTime - 10;
    if (newTime < 0) {
      newTime = 0;
    }
    handleSeek(newTime);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: colors.text}]}>
          Summary audio
        </Text>
        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.CLOSE}
            style={[styles.closeIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
      </View>
      {urlToImg ? (
        <Image source={{uri: urlToImg}} style={styles.audioImg} />
      ) : (
        <Image source={IMAGES.AUDIO} style={styles.audioImg} />
      )}
      <Text style={[styles.newsTitle, {color: colors.text}]} numberOfLines={3}>
        {title}
      </Text>
      <Slider
        style={styles.audioTimeline}
        thumbTintColor={colors.text}
        maximumTrackTintColor={colors.text}
        minimumTrackTintColor={colors.text}
        value={Number(currentTime) || 0}
        minimumValue={0}
        maximumValue={Number(duration) > 0 ? Number(duration) : 1}
        onValueChange={handleSeek}
      />

      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.controlBtn} onPress={handleReverse}>
          <Image
            source={ICONS.PREV}
            style={[styles.controlIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlBtn}
          onPress={play ? handleStop : handlePlay}>
          <Image
            source={play ? ICONS.STOP : ICONS.PLAY}
            style={[styles.playIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn} onPress={handleForward}>
          <Image
            source={ICONS.NEXT}
            style={[styles.controlIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.volumeControl}>
        <Image
          source={ICONS.VOLUME}
          style={[styles.volumeIcon, {tintColor: colors.text}]}
        />
        <Slider
          style={styles.volumeSlider}
          thumbTintColor={colors.text}
          maximumTrackTintColor={colors.text}
          minimumTrackTintColor={colors.text}
          value={Number(volume)} // Ensure it's a number
          minimumValue={0}
          maximumValue={1}
          onValueChange={handleVolumeChange}
        />
      </View>
    </View>
  );
};

export default AudioScreen;
