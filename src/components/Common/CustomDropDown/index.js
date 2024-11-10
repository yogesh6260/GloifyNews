import React, {useEffect} from 'react';
import {View, FlatList, Animated, Easing, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Button from '../Button';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '../../../styles/fontSize';

const CustomDropDown = ({dropDownItems, isOpen}) => {
  const {colors} = useTheme();
  const {width} = Dimensions.get('window');
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
    <Animated.View style={[styles.dropDownContainer, animatedStyle]}>
      <FlatList
        data={dropDownItems}
        renderItem={({item, index}) => (
          <Button
            key={index}
            text={`${item.label}`}
            textSize={FONT_SIZE_13}
            onPress={item.onPress}
            variant="text"
            bgColor={colors.drawerLabel}
            width={'100%'}
            height={verticalScale(50)}
            weight="medium"
            alignItems="flex-start"
            rippleColor={'lightgray'}
            paddingLeft={horizontalScale(60)}
          />
        )}
        contentContainerStyle={styles.dropDownItemList}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  ) : null;
};

export default CustomDropDown;
