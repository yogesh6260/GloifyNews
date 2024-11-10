import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants';

const Snackbar = ({
  message,
  onActionPress,
  duration = 3000, // Default duration in milliseconds
  position = 'bottom', // Default position
  textColor,
  isVisible = true,
  setIsVisible,
  type,
}) => {
  const {colors} = useTheme();

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration, setIsVisible]);

  if (!isVisible) {
    return null;
  }

  const getBackgroundColor = mode => {
    if (mode === 'error') {
      return colors.snackBarError;
    } else if (mode === 'warning') {
      return colors.snackBarWarning;
    } else {
      return colors.snackBarSuccess;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: getBackgroundColor(type)},
        position === 'top' ? styles.topContainer : styles.bottomContainer,
        {opacity: 0.9},
      ]}>
      <TouchableOpacity
        style={styles.action}
        onPress={onActionPress}
        activeOpacity={0.7}>
        <Image
          source={ICONS.CLOSE_ROUND}
          style={[styles.closeIcon, {tintColor: textColor}]}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={[styles.messageText, {color: textColor}]}>{message}</Text>
      </View>
    </View>
  );
};

export default Snackbar;
