import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {forwardRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {ICONS} from '../../../constants/Icons';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const ReportContent = ({handleSheetClose, handleReport}, ref) => {
  const {colors} = useTheme();
  return (
    <BottomSheet
      ref={ref}
      snapPoints={['10%', '25%', '50%']}
      onClose={handleSheetClose}
      enablePanDownToClose={true}
      backgroundStyle={{backgroundColor: colors.background}}>
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
    </BottomSheet>
  );
};

export default forwardRef(ReportContent);
