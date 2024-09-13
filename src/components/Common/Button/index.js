import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({
  bgColor,
  width,
  height,
  text,
  textColor,
  onPress,
  disable,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {backgroundColor: bgColor, width: width, height: height},
      ]}
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.8}>
      <Text style={[styles.btnText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
