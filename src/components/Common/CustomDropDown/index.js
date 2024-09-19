import React, {useEffect} from 'react';
import {View, FlatList, Animated, Easing} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Button from '../Button';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const CustomDropDown = ({settings, isOpen}) => {
  const {colors} = useTheme();
  const animation = new Animated.Value(0); // Animation value for smooth transitions

  // Animate the dropdown opening and closing
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        scaleY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
    ],
  };

  return isOpen ? (
    <Animated.View
      style={[
        styles.dropDownContainer,
        animatedStyle,
        {backgroundColor: colors.snackBarTxt, shadowColor: colors.text},
      ]}>
      <FlatList
        data={settings}
        renderItem={({item, index}) => (
          <Button
            key={index}
            text={`${item.input ? `${item.input}` : ''}`}
            onPress={item.onPress}
            textColor={colors.text}
            height={verticalScale(50)}
            disable={true}
            variant="outlined"
            bgColor={colors.border}
            width={horizontalScale(250)}
          />
        )}
        contentContainerStyle={styles.dropDownItemList}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  ) : null;
};

export default CustomDropDown;
