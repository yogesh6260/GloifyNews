import {View, Text, Pressable, Image, StatusBar, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {ICONS, IMAGES} from '../../../constants';
import {useTheme} from '@react-navigation/native';

const CouponSplash = ({navigation, route}) => {
  const {colors, dark} = useTheme();
  const {selectedBrand, item} = route.params;
  StatusBar.setBackgroundColor(colors.background, true);
  StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);

  const rotateValue = useRef(new Animated.Value(0)).current;
  const slideValue1 = useRef(new Animated.Value(-100)).current;
  const slideValue2 = useRef(new Animated.Value(100)).current;
  const badgeXPosition = useRef(new Animated.Value(200)).current;
  const badgeYPosition = useRef(new Animated.Value(-100)).current;

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Continuous Rotation Animation
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();

    // Sliding Animation for Overlapping Circles

    const slidingSequence = Animated.sequence([
      Animated.parallel([
        Animated.timing(slideValue1, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(slideValue2, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(slideValue1, {
          toValue: -100,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(slideValue2, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ]);
    Animated.sequence([
      slidingSequence,
      slidingSequence,
      Animated.parallel([
        Animated.timing(slideValue1, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideValue2, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // Start badge animation once sliding completes
      Animated.parallel([
        Animated.timing(badgeXPosition, {
          toValue: 60, // Final X position
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(badgeYPosition, {
          toValue: 110, // Final Y position
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsAnimationComplete(true);
      });
    });
  }, [rotateValue, slideValue1, slideValue2, badgeXPosition, badgeYPosition]);

  useEffect(() => {
    if (isAnimationComplete) {
      setTimeout(() => {
        navigation.navigate('CouponWebView', {url: item.couponLink});
      }, 1000);
    }
  }, [isAnimationComplete, navigation, item.couponLink]);

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={[styles.header, {backgroundColor: colors.background}]}>
        <Pressable
          android_ripple={{color: 'lightgray', borderless: false}}
          onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK_ARROW}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerText, {color: colors.text}]}>Coupons</Text>
      </View>
      <View style={[styles.content, {backgroundColor: 'white'}]}>
        <Animated.View
          style={[
            styles.animatedBadge,
            {
              transform: [
                {translateX: badgeXPosition},
                {translateY: badgeYPosition},
              ],
            },
          ]}>
          <View style={styles.logoBadge}>
            <Image source={IMAGES.FYND_LOGO} style={styles.fyndLogo} />
          </View>
          <Image source={ICONS.SALE} style={styles.badge} />
        </Animated.View>
        <View style={styles.circleContainer}>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [{translateX: slideValue1}],
                backgroundColor: '#FEF9F2',
              },
            ]}>
            <Animated.Image
              source={ICONS.COUPON}
              style={[styles.animatedImage, {tintColor: 'orange'}]}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [{translateX: slideValue2}],
                elevation: isAnimationComplete ? 5 : 1,
                backgroundColor: 'white',
              },
            ]}>
            <Animated.Image
              source={selectedBrand.logo}
              style={styles.animatedImage}
            />
          </Animated.View>
        </View>
        {!isAnimationComplete && (
          <Animated.Image
            source={ICONS.DISCOUNT}
            style={[styles.animatedCoupon, {transform: [{rotate: rotation}]}]}
          />
        )}
        <View style={styles.couponDetails}>
          <Text
            style={[
              styles.couponStatus,
              {color: '#333'},
            ]}>{`${item.id} is getting Activated`}</Text>
          <Text style={styles.couponName}>{item.couponName}</Text>
          {isAnimationComplete && (
            <View style={styles.linkText}>
              <Text>Please wait, we're taking you to </Text>
              <Text>{item.couponLink}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CouponSplash;
