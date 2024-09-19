import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {forwardRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ICONS} from '../../../constants';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {verticalScale} from '../../../styles/metrics';

const ReportContent = ({handleReport}, ref) => {
  const {colors} = useTheme();
  return (
    <RBSheet
      ref={ref}
      height={verticalScale(60)}
      draggable={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: colors.background,
        },
        draggableIcon: {
          backgroundColor: colors.text,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      closeOnPressMask={true}
      closeOnPressBack={true}>
      <TouchableOpacity
        style={[
          styles.bottomSheetContainer,
          {backgroundColor: colors.background},
        ]}
        onPress={handleReport}>
        <Image
          source={ICONS.BIN}
          style={[styles.icon, {tintColor: colors.text}]}
        />
        <Text style={[styles.report, {color: colors.text}]}>
          Report Content
        </Text>
      </TouchableOpacity>
    </RBSheet>
  );
};

export default forwardRef(ReportContent);
