import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const Tooltip = ({
  isVisible,
  content,
  placementTop,
  pinPlacementTop,
  pinXPosition,
}) => {
  const {colors, dark} = useTheme();
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.tooltip,
          {backgroundColor: colors.btnBackground, top: placementTop},
        ]}>
        <Text style={[styles.text, {color: colors.btnText}]}>{content}</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.tooltipPin,
          {
            borderTopColor: colors.btnBackground,
            top: pinPlacementTop,
            transform: [{translateX: pinXPosition}, {rotateY: '60deg'}],
          },
        ]}
      />
    </>
  );
};

export default Tooltip;
