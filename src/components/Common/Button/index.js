import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {getFontFamily} from '../../../utils/fontFamily';

const Button = ({
  bgColor,
  width,
  height,
  text,
  textColor,
  onPress,
  disable,
  rippleColor,
  textSize,
  borderRadius,
  variant = 'text', // default is 'text' variant
  weight = 'bold',
  alignItems = 'center',
  paddingLeft = 0,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: bgColor || 'black',
        };
      case 'contained':
        return {
          backgroundColor: bgColor || '#0f4c75',
        };
      case 'elevated':
        return {
          backgroundColor: bgColor || '#0f4c75',
          elevation: 5,
        };
      case 'text':
      default:
        return {
          backgroundColor: 'transparent',
        };
    }
  };

  const getTextStyle = () => {
    if (variant === 'outlined' || variant === 'text') {
      return {color: bgColor || '#0f4c75'};
    }
    return {color: textColor || 'white'};
  };

  return (
    <View
      style={[
        styles.btnView,
        {width, height, borderRadius},
        variant === 'text' ? {elevation: 0} : {elevation: 1},
      ]}>
      <Pressable
        android_ripple={{
          color: rippleColor,
          borderless: false,
        }}
        style={[
          styles.btn,
          getButtonStyle(),
          {width, height, borderRadius, alignItems, paddingLeft},
        ]}
        onPress={onPress}
        disabled={disable}>
        <Text
          style={[
            styles.btnText,
            getTextStyle(),
            {fontSize: textSize, fontFamily: getFontFamily(weight)},
          ]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
