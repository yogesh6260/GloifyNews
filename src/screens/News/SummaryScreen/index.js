import {BackHandler, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {NewsCard, ReportContent} from '../../../components/News';
import {Snackbar, Loader} from '../../../components/Common';
import styles from './styles';
import Swiper from 'react-native-deck-swiper';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useGetNewsArticlesQuery} from '../../../redux/api/News/newsApi';
import {generateQuery} from '../../../utils/helpers';
import FallBackUI from '../../../components/Common/FallBackUI';
import Share from 'react-native-share';

import {verticalScale} from '../../../styles/metrics';

const SummaryScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
  const {data, isLoading, error, isError} = useGetNewsArticlesQuery(params);

  const bottomSheetRef = useRef();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  const handleAudio = (title, news, urlToImage) => {
    navigation.navigate('AudioTab', {
      title: title,
      news: news,
      urlToImg: urlToImage,
    });
  };

  const handleMore = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  const handlePress = newsUrl => {
    navigation.navigate('NewsRead', {
      url: newsUrl,
    });
  };

  const handleShare = newsUrl => {
    Share.open({url: newsUrl})
      .then(res => {
        if (res.success) {
          setIsVisible(true);
          setMessage('Article Shared!');
        }
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const handleReport = () => {
    setIsVisible(true);
    setMessage('Content Reported!');
    bottomSheetRef.current.close();
  };

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        {isLoading ? (
          <Loader />
        ) : isError || data === undefined ? (
          <View>
            <FallBackUI
              fallbackType={'fetch'}
              errorMessage={error?.data?.message}
              iconWidth={200}
              iconHeight={200}
            />
          </View>
        ) : (
          <>
            <Swiper
              key={theme}
              ref={swiperRef}
              cards={data}
              cardIndex={0}
              renderCard={(article, index) => {
                return (
                  <NewsCard
                    key={index}
                    articleId={article.articleId}
                    author={article?.author}
                    title={article?.title}
                    cardImg={article?.urlToImage}
                    source={article?.source?.name}
                    desc={article?.description}
                    time={moment(article?.publishedAt).fromNow()}
                    onShare={() => handleShare(article.url)}
                    onAudio={() =>
                      handleAudio(
                        article.title,
                        article.description,
                        article.urlToImage,
                      )
                    }
                    onMore={() => handleMore()}
                    onPress={() => handlePress(article.url)}
                  />
                );
              }}
              containerStyle={{
                backgroundColor: colors.background,
                marginTop: verticalScale(30),
              }}
              cardStyle={{elevation: 5}}
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

            <ReportContent ref={bottomSheetRef} handleReport={handleReport} />
          </>
        )}
      </View>
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="bottom"
        textColor={colors.snackBarTxt}
        actionTextColor={colors.snackBar}
      />
    </>
  );
};

export default SummaryScreen;
