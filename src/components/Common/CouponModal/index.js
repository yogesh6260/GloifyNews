import {View, Text, StatusBar} from 'react-native';
import React, {forwardRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import styles from './styles';
import {Image} from 'react-native';
import Button from '../Button';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import Clipboard from '@react-native-clipboard/clipboard';

const CouponModal = ({selectedBrand, item, height}, ref) => {
  const [copied, setCopied] = useState(false);
  const {colors, dark} = useTheme();
  const navigation = useNavigation();

  const changeStatusBar = () => {
    setCopied(false);
    if (!dark) {
      StatusBar.setBackgroundColor('rgba(2, 2, 2, 0.25)', true);
      StatusBar.setBarStyle('dark-content', true);
    }
  };

  const changeStatusBarToInitial = () => {
    setCopied(false);
    if (!dark) {
      StatusBar.setBackgroundColor(colors.background, true);
      StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
    }
  };

  return (
    <RBSheet
      ref={ref}
      onOpen={changeStatusBar}
      onClose={changeStatusBarToInitial}
      height={height}
      draggable={true}
      customStyles={{
        draggableIcon: {
          width: horizontalScale(70),
          backgroundColor: '#333',
          height: verticalScale(4),
        },
        wrapper: {
          backgroundColor: 'rgba(2, 2, 2, 0.25)',
        },
        container: {
          backgroundColor: 'white',
          alignItems: 'center',
          paddingVertical: verticalScale(30),
          borderTopStartRadius: moderateScale(20),
          borderTopEndRadius: moderateScale(20),
          elevation: 5,
          zIndex: 5,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      openDuration={100}
      closeDuration={100}
      closeOnPressMask={true}
      closeOnPressBack={true}>
      <View style={styles.modalContainer}>
        <Image source={selectedBrand?.logo} style={styles.brandLogo} />
        <View style={styles.couponHead}>
          <Text style={[styles.couponName, {color: '#333'}]}>
            {item?.couponName}
          </Text>
        </View>
        <View style={styles.couponContainer}>
          <Text style={[styles.couponId, {color: 'black'}]}>{item?.id}</Text>
          <Button
            text={copied ? 'Copied!' : 'Copy Code'}
            textColor={'white'}
            variant="contained"
            bgColor={'#E3651D'}
            width={'100%'}
            height={verticalScale(40)}
            borderRadius={moderateScale(10)}
            weight="bold"
            textSize={FONT_SIZE_14}
            onPress={() => {
              Clipboard.setString(item?.id);
              setCopied(true);
              setTimeout(() => {
                ref?.current?.close();
                navigation.navigate('CouponSplash', {selectedBrand, item});
              }, 2000);
            }}
          />
        </View>
        <View style={styles.couponContent}>
          <Text style={[styles.couponDetails]}>
            • {'Coupon Code Required To Avail The Offer'}
          </Text>
          <Text style={[styles.couponDetails]}>
            • {'Coupon Applicable on Minimum Order of 1599/-'}
          </Text>
          <Text style={[styles.couponDetails]}>• {'Limited Time Offer'}</Text>
          <Text style={[styles.couponDetails]}>
            • {'Valid on Selected Products'}
          </Text>
        </View>
      </View>
    </RBSheet>
  );
};

export default forwardRef(CouponModal);
