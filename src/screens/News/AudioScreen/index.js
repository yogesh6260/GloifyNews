import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
import {useTheme} from '@react-navigation/native';
import {IMAGES} from '../../../constants/Images';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';

const AudioScreen = ({navigation, route}) => {
  const [play, setPlay] = useState(false);
  const {colors} = useTheme();
  const {desc, title} = route.params.source;

  useEffect(() => {
    Tts.setDucking(true);
    Tts.setDefaultLanguage('en-IN');
    Tts.setDefaultVoice('en-gb-x-gbb-network');
    Tts.setDefaultRate(0.4);
  }, []);

  const handlePlay = () => {
    setPlay(true);

    Tts.speak(desc);
  };
  const handleStop = () => {
    setPlay(false);
    Tts.stop();
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
      <Image source={IMAGES.AUDIO} style={styles.audioImg} />
      <Text style={[styles.newsTitle, {color: colors.text}]} numberOfLines={3}>
        {title}
      </Text>
      <Slider
        style={styles.audioTimeline}
        thumbTintColor={colors.text}
        maximumTrackTintColor={colors.text}
        minimumTrackTintColor={colors.text}
      />
      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.controlBtn}>
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
        <TouchableOpacity style={styles.controlBtn}>
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
        />
      </View>
    </View>
  );
};

export default AudioScreen;
