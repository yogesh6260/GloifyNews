import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ICONS} from '../../constants';
import {useTheme} from '@react-navigation/native';
import ProgressBar from '../../components/Common/ProgressBar';
import {verticalScale} from '../../styles/metrics';

const NewsScreen = ({route, navigation}) => {
  const [progress, setProgress] = useState(0);
  const [hideProgress, setHideProgress] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const url = route.params.url;
  const {colors} = useTheme();

  useEffect(() => {
    if (progress === 1) {
      setHideProgress(true);
    }
  }, [progress]);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      // adjust the threshold value as needed
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.background,
            height: hideHeader ? verticalScale(40) : verticalScale(60),
          },
        ]}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
        {hideHeader ? null : (
          <View style={styles.textContainer}>
            <Text style={[styles.headerText, {color: 'black'}]}>JioNews</Text>
          </View>
        )}
      </View>
      {hideProgress ? null : <ProgressBar progressState={progress} />}
      <WebView
        key={url}
        source={{uri: url}}
        cacheEnabled={false}
        cacheMode="LOAD_NO_CACHE"
        startInLoadingState={true}
        contentMode="mobile"
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
        }}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default NewsScreen;
