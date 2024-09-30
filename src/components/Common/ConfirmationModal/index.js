import {View, Text, StatusBar} from 'react-native';
import React, {forwardRef} from 'react';
import {useTheme} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import Button from '../Button';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import styles from './styles';

const ConfirmationModal = (
  {handleConfirm, handleCancel, confirmText, actionText, height, btnHeight},
  ref,
) => {
  const {colors, dark} = useTheme();

  const changeStatusBar = () => {
    StatusBar.setBackgroundColor('rgba(2, 2, 2, 0.25)', true);
    StatusBar.setBarStyle('dark-content', true);
  };

  const changeStatusBarToInitial = () => {
    StatusBar.setBackgroundColor(colors.background, true);
    StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
  };

  return (
    <RBSheet
      ref={ref}
      onOpen={changeStatusBar}
      onClose={changeStatusBarToInitial}
      height={height}
      draggable={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(2, 2, 2, 0.25)',
        },
        container: {
          backgroundColor: colors.background,
          alignItems: 'center',
          paddingVertical: verticalScale(40),
          borderTopStartRadius: moderateScale(25),
          borderTopEndRadius: moderateScale(25),
          elevation: 5,
          zIndex: 5,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      openDuration={100}
      closeDuration={100}
      closeOnPressMask={true}
      closeOnPressBack={true}>
      <View style={styles.modalContainer}>
        <View style={styles.textContainer}>
          <Text
            style={[styles.modalText, {color: colors.text}]}
            numberOfLines={2}>
            {confirmText}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            text={actionText}
            textSize={FONT_SIZE_14}
            width={horizontalScale(160)}
            borderRadius={moderateScale(30)}
            height={btnHeight}
            bgColor={colors.btnBackground}
            textColor={colors.btnText}
            onPress={handleConfirm}
            variant="elevated"
          />
          <Button
            text={'Cancel'}
            textSize={FONT_SIZE_14}
            width={horizontalScale(160)}
            borderRadius={moderateScale(30)}
            height={btnHeight}
            bgColor={colors.disableBtnBackground}
            textColor={colors.disableBtnText}
            onPress={handleCancel}
            variant="elevated"
          />
        </View>
      </View>
    </RBSheet>
  );
};

export default forwardRef(ConfirmationModal);
