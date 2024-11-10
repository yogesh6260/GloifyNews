import {View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from '@react-navigation/native';

const ProgressBar = ({progressState}) => {
  const {width} = Dimensions.get('window');
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progressState}
        width={width}
        borderWidth={0}
        color={colors.border}
        style={{borderRadius: 0}}
      />
    </View>
  );
};

export default ProgressBar;
