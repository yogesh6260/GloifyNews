import {View, Text, Pressable, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {moderateScale, verticalScale} from '../../../styles/metrics';
import {ICONS} from '../../../constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Snackbar from '../../../components/Common/Snackbar';

const CouponScan = ({navigation}) => {
  const {colors} = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const isValidUrl = url => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(url);
  };

  const onSuccess = e => {
    const isValid = isValidUrl(e.data);
    if (isValid) {
      navigation.navigate('CouponWebView', {url: e.data});
    } else {
      console.log('invalid!');

      setMessage('Invalid QR, Please, try again!');
      setIsVisible(true);
      Alert.alert('Invalid QR Code!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={[styles.header, {backgroundColor: colors.background}]}>
        <Pressable
          onPress={() => navigation.navigate('Drawer')}
          android_ripple={{
            color: 'lightgray',
            borderless: false,
            radius: moderateScale(12),
          }}>
          <Image
            source={ICONS.MENU}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerText, {color: colors.text}]}>Coupons</Text>
      </View>

      {/* Subheader Section */}
      <View style={styles.subHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK_ARROW}
            style={[styles.backIcon, {tintColor: '#333'}]}
          />
        </Pressable>
        <Text style={styles.subHeaderText}>Scan QR Code</Text>
        <Image source={ICONS.HELP} style={styles.helpIcon} />
      </View>
      <View style={styles.qrScannerContainer}>
        <View style={styles.overlaySideContainer}>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            cameraStyle={styles.cameraStyle}
            reactivate={true}
          />
        </View>
      </View>

      <View style={styles.overlayTop} />
      <View style={styles.overlayBottom}>
        <Text style={styles.scanText}>Scan QR Code for exciting offers.</Text>
        <Text style={styles.offerText}>Get up to 50% off on store visits</Text>
      </View>
      <View style={styles.overlayLeft} />
      <View style={styles.overlayRight} />
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="bottom"
        textColor={colors.snackBarTxt}
        actionTextColor={colors.snackBar}
        // type={'error'}
      />
    </View>
  );
};

export default CouponScan;
