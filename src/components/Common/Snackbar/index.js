import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants/Icons';

const Snackbar = ({
  message,
  actionText,
  onActionPress,
  duration = 3000, // Default duration in milliseconds
  position = 'bottom', // Default position
  containerStyle,
  messageStyle,
  actionTextStyle,
  backgroundColor,
  textColor,
  actionTextColor,
  isVisible = true,
  setIsVisible,
}) => {
  const {colors} = useTheme();
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration]);

  if (!isVisible) {
    return null;
  }
  return (
    <View
      style={[
        styles.container,
        {backgroundColor},
        position === 'top' ? styles.topContainer : styles.bottomContainer,
      ]}>
      <View style={styles.content}>
        <Text style={[styles.messageText, {color: textColor}]}>{message}</Text>
      </View>
      <TouchableOpacity style={styles.action} onPress={onActionPress}>
        <Image
          source={ICONS.CLOSE}
          style={[styles.closeIcon, {tintColor: colors.snackBarTxt}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Snackbar;
