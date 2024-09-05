import {View, BackHandler, Alert} from 'react-native';
import React, {useEffect, useRef} from 'react';
import NewsCard from '../../../components/News/NewsCard';
import styles from './styles';
import Swiper from 'react-native-deck-swiper';
import Loader from '../../../components/Common/Loader';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useGetNewsArticlesQuery} from '../../../redux/api/News/newsApi';
import {generateQuery} from '../../../utils/helpers';
import FallBackUI from '../../../components/Common/FallBackUI';

const SummaryScreen = ({navigation}) => {
  const {colors} = useTheme();
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const theme = useSelector(state => state.user.preference.theme);

  const swiperRef = useRef(null);
  const query = generateQuery(newsTopics);
  const params = {
    q: query,
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-03',
    sortBy: 'popularity',
  };

  // QUERY
  const {data, isLoading, error} = useGetNewsArticlesQuery(params);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, [newsTopics]);

  const handleBackPress = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed!');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {isLoading ? (
        <Loader />
      ) : data && data.articles ? (
        <Swiper
          key={theme}
          ref={swiperRef}
          cards={data?.articles}
          cardIndex={0}
          renderCard={(article, index) => {
            return (
              <NewsCard
                key={index}
                author={article?.author}
                title={article?.title}
                cardImg={article?.urlToImage}
                source={article?.source?.name}
                desc={article?.description}
                time={moment(article?.publishedAt).fromNow()}
                navigation={navigation}
              />
            );
          }}
          containerStyle={{backgroundColor: colors.background}}
          backgroundColor={colors.background}
          verticalSwipe={true}
          horizontalSwipe={false}
          stackSize={3}
          stackSeparation={20}
          stackScale={4}
          infinite={true}
          cardVerticalMargin={20}
          showSecondCard={false}
          animateCardOpacity={true}
          swipeBackCard={true}
          goBackToPreviousCardOnSwipeBottom={true}
        />
      ) : (
        <View>
          <FallBackUI
            fallbackType={'fetch'}
            errorMessage={error?.data?.message}
            iconWidth={200}
            iconHeight={200}
          />
        </View>
      )}
    </View>
  );
};

export default SummaryScreen;
