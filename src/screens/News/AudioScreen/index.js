import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
  AppState,
  BackHandler,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {ICONS, IMAGES} from '../../../constants';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Tts from 'react-native-tts';
import {VolumeManager} from 'react-native-volume-manager';
import {BlurView} from '@react-native-community/blur';
import {LinearGradient} from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import {moderateScale} from '../../../styles/metrics';

let interval = null;

const AudioScreen = ({navigation, route}) => {
  const [play, setPlay] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(1); // Default volume level (1.0 = max)
  const {colors, dark} = useTheme();
  const {newsList, currentIndex} = route.params;
  const [currentNews, setCurrentNews] = useState(newsList[currentIndex]);

  const bounceAnim = useRef(new Animated.Value(0)).current;

  const startBounceAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -50, // move up by 10 units
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0, // return to initial position
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const stopBounceAnimation = () => {
    bounceAnim.stopAnimation();
    bounceAnim.setValue(0); // reset to original position
  };

  const appState = useRef(AppState.currentState);

  const {title, content, urlToImg} = currentNews;
  const {t} = useTranslation();

  const wordsArray = title.split(' ');
  const wordsPerSecond = 2;

  // StatusBar UseEffect
  useEffect(() => {
    const changeStatusBar = () => {
      if (!dark) {
        StatusBar.setBackgroundColor('#000', true);
        StatusBar.setBarStyle('light-content', true);
      }
    };

    const changeStatusBarToInitial = () => {
      if (!dark) {
        StatusBar.setBackgroundColor(colors.background, true);
        StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
      }
    };
    changeStatusBar();

    return () => {
      changeStatusBarToInitial();
    };
  }, [colors.background, dark]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Summary', {currentIndex});
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        subscription.remove();
      };
    }, []),
  );

  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (appState.current.match(/active/) && nextAppState === 'background') {
        // Stop audio when app goes to the background
        Tts.stop();
        clearInterval(interval);
        setPlay(false);
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  // Stop Audio on remove Focus or Blur
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      handlePlay();
      // startSeekUpdate();
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

  // Handling Audio Initialization
  useEffect(() => {
    Tts.setDucking(true);
    Tts.setDefaultLanguage('en-IN');
    Tts.setDefaultVoice('en-in-x-ene-network');
    Tts.setDefaultRate(0.5);
    Tts.setDefaultPitch(1.0);
    VolumeManager.setVolume(1, {type: 'music'});

    const finishListener = Tts.addEventListener('tts-finish', () => {
      setPlay(false);
      clearInterval(interval);
      stopBounceAnimation();
    });

    const progressListener = Tts.addEventListener('tts-progress', event => {
      // Update current time based on progress event
      // console.log(event);
    });

    return () => {
      Tts.stop();
      finishListener?.remove();
      progressListener?.remove();
      clearInterval(interval);
    };
  }, []);

  const updateCurrentTime = newTime => setCurrentTime(Math.round(newTime));

  // Tts.voices().then(voices => {
  //   const indianVoice = voices.find(voice => voice.language === 'en-IN');
  //   console.log(indianVoice);
  // });

  useEffect(() => {
    setDuration(Math.floor(title.split(' ').length / 2) - 1); // Example duration calculation
  }, [title]);

  const handleGoBack = () => {
    navigation.navigate('Summary', {currentIndex});
  };

  const startSeekUpdate = () => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      setCurrentTime(prevTime => {
        if (prevTime >= duration) {
          clearInterval(interval); // Stop updating when finished
          return duration;
        }
        return Math.round(prevTime + 1); // Increment by 1 second
      });
    }, 1000);
  }; // FIX

  const handlePlay = () => {
    const startingWordIndex = Math.floor(currentTime * wordsPerSecond);
    let remainingText = wordsArray.slice(startingWordIndex).join(' ');
    if (currentTime === duration) {
      setCurrentTime(0);
      remainingText = title;
    }
    setPlay(true);
    Tts.speak(remainingText, {
      androidParams: {KEY_PARAM_STREAM: 'STREAM_MUSIC'},
    });
    startBounceAnimation();
    // startSeekUpdate(); // Start seek update when audio plays
  };

  const handleStop = () => {
    setPlay(false);
    Tts.stop();
    clearInterval(interval); // Stop updating the seekBar
    stopBounceAnimation();
  };

  const handleSeek = value => {
    updateCurrentTime(value);
    if (play) {
      Tts.stop();
      setTimeout(() => handlePlay(), 300); // Delay slightly before restarting
    }
  };

  const goToNextNews = () => {
    if (currentIndex < newsList.length - 1) {
      navigation.replace('AudioTab', {
        newsList,
        currentIndex: currentIndex + 1,
      });
      setCurrentTime(0);
      setPlay(true);
    }
  };

  const goToPreviousNews = () => {
    if (currentIndex > 0) {
      navigation.replace('AudioTab', {
        newsList,
        currentIndex: currentIndex - 1,
      });
      setCurrentTime(0);
      setPlay(true);
    }
  };

  const handleVolumeChange = value => {
    const volumeValue = value; // Ensure it's a number
    setVolume(volumeValue);
    VolumeManager.setVolume(volumeValue, {type: 'music'});
  };

  return (
    <View style={styles.container}>
      {/* Gradient Overlay */}
      <LinearGradient
        style={styles.gradient}
        colors={['#00172D', '#00A99D', '#7ED321']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      />
      {/* BlurView */}
      <BlurView
        style={styles.absolute}
        blurType={dark ? 'dark' : 'light'}
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      {/* Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerTitle, {color: colors.btnText}]}>
              {t('screens.audio.title')}
            </Text>
          </View>
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(12),
            }}
            style={styles.btnClose}
            onPress={handleGoBack}>
            <Image
              source={ICONS.CLOSE}
              style={[styles.closeIcon, {tintColor: colors.btnText}]}
            />
          </Pressable>
        </View>
        {urlToImg ? (
          <Image source={{uri: urlToImg}} style={styles.audioImg} />
        ) : (
          <Animated.Image
            source={IMAGES.AUDIO}
            style={[styles.audioIcon, {transform: [{translateY: bounceAnim}]}]}
          />
        )}
        {/* <Text
          style={[styles.newsTitle, {color: colors.btnText}]}
          numberOfLines={3}>
          {title}
        </Text> */}
        {/* <Slider
          style={styles.audioTimeline}
          thumbTintColor={colors.btnText}
          maximumTrackTintColor={colors.btnText}
          minimumTrackTintColor={colors.btnText}
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          onSlidingComplete={handleSeek}
          trackHeight={20}
          step={1}
        /> */}
        {/* <View style={styles.timings}>
          <Text style={styles.duration}>
            {currentTime < 10 ? `00:0${currentTime}` : `00:${currentTime}`}
          </Text>
          <Text style={styles.duration}>
            {duration < 10 ? `00:0${duration}` : `00:${duration}`}
          </Text>
        </View> */}
        <View style={styles.audioControls}>
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(12),
            }}
            style={styles.controlBtn}
            onPress={goToPreviousNews}>
            <Image
              source={ICONS.PREV}
              style={[
                styles.controlIcon,
                {
                  tintColor: currentIndex === 0 ? 'lightgrey' : colors.btnText,
                },
              ]}
            />
          </Pressable>
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(12),
            }}
            style={styles.controlBtn}
            onPress={play ? handleStop : handlePlay}>
            <Image
              source={play ? ICONS.STOP : ICONS.PLAY}
              style={[styles.playIcon, {tintColor: colors.btnText}]}
            />
          </Pressable>
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(12),
            }}
            style={styles.controlBtn}
            onPress={goToNextNews}>
            <Image
              source={ICONS.NEXT}
              style={[
                styles.controlIcon,
                {
                  tintColor:
                    currentIndex === newsList.length - 1
                      ? 'lightgrey'
                      : colors.btnText,
                },
              ]}
            />
          </Pressable>
        </View>
        <View style={styles.volumeControl}>
          <Image
            source={ICONS.VOLUME}
            style={[styles.volumeIcon, {tintColor: colors.btnText}]}
          />
          <Slider
            style={styles.volumeSlider}
            thumbTintColor={colors.btnText}
            maximumTrackTintColor={colors.btnText}
            minimumTrackTintColor={colors.btnText}
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
