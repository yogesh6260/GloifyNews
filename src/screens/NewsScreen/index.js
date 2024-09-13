import React from 'react';
import {WebView} from 'react-native-webview';
import Loader from '../../components/Common/Loader';
import {View} from 'react-native';
import styles from './styles';

const NewsScreen = ({route, navigation}) => {
  const url = route.params.url;

  return (
    <View style={styles.container}>
      <WebView
        key={url}
        source={{uri: url}}
        cacheEnabled={false}
        cacheMode="LOAD_NO_CACHE"
        renderLoading={Loader}
        startInLoadingState={true}
      />
    </View>
  );
};

export default NewsScreen;
