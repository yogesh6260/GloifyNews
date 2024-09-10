import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({bgColor, width, text, textColor, onPress, disable}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bgColor, width: width}]}
      onPress={onPress}
      disabled={disable}>
      <Text style={[styles.btnText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
