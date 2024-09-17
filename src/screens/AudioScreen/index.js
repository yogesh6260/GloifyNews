import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ICONS, IMAGES} from '../../constants';
import {useTheme} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';
import {VolumeManager} from 'react-native-volume-manager';

let interval = null;

const AudioScreen = ({navigation, route}) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(1); // Default volume level (1.0 = max)
  const {colors} = useTheme();
  const {title, news, urlToImg} = route.params;

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setPlay(false);
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      Tts.stop();
      clearInterval(interval);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
      Tts.stop();
      clearInterval(interval);
    };
  }, [navigation]);

  useEffect(() => {
    Tts.setDucking(true);
    Tts.setDefaultLanguage('en-IN');
    Tts.setDefaultRate(0.4);

    VolumeManager.getVolume().then(initialVolume => {
      setVolume(Number(initialVolume.volume)); // Ensure it's a number
    });

    const finishListener = Tts.addEventListener('tts-finish', () => {
      setPlay(false);
      clearInterval(interval);
    });

    return () => {
      Tts.stop();
      finishListener?.remove();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setDuration(news.split(' ').length / 2); // Example duration calculation
  }, [news]);

  const startSeekUpdate = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      setCurrentTime(prevTime => {
        if (prevTime >= duration) {
          clearInterval(interval);
          return duration;
        }
        return prevTime + 1; // Increment by 1 second
      });
    }, 1000); // Update every second
  };

  const handlePlay = () => {
    setPlay(true);
    Tts.speak(news, {
      startTime: currentTime * 1000, // Resume from where it left off
    });
    startSeekUpdate(); // Start seek update when audio plays
  };

  const handleStop = () => {
    setPlay(false);
    Tts.stop();
    clearInterval(interval); // Stop updating the seekBar
  };

  const handleSeek = value => {
    if (play) {
      setCurrentTime(value);
      Tts.stop();
      Tts.speak(news, {startTime: value * 1000}); // Seek to the new position
      startSeekUpdate(); // Update seekBar after seeking
    }
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
      <View style={styles.contentWrapper}>
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
        <Text
          style={[styles.newsTitle, {color: colors.text}]}
          numberOfLines={3}>
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
    </View>
  );
};

export default AudioScreen;
