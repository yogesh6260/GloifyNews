import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

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
      <TouchableOpacity
        style={[styles.action, {backgroundColor: colors.tileBackground}]}
        onPress={onActionPress}>
        <Text style={[styles.actionText, {color: textColor}]}>
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Snackbar;
