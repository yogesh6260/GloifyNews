import {BackHandler, Image, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import NewsCard from '../../../components/News/NewsCard';
import styles from './styles';
import Swiper from 'react-native-deck-swiper';
import Loader from '../../../components/Common/Loader';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useGetNewsArticlesQuery} from '../../../redux/api/News/newsApi';
import {generateQuery} from '../../../utils/helpers';
import FallBackUI from '../../../components/Common/FallBackUI';
import Share from 'react-native-share';
import Snackbar from '../../../components/Common/Snackbar';

import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {ICONS} from '../../../constants/Icons';

const SummaryScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [articles, setArticles] = useState(null);

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
  console.log(data?.articles[0]);

  const filterRemovedArticles = articles => {
    if (articles?.length !== 0) {
      return articles?.filter(article => article.title !== '[Removed]');
    }
  };

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const filteredArticles = filterRemovedArticles(data?.articles);
    setArticles(filteredArticles);
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isBottomSheetOpen) {
          bottomSheetRef.current.close();
          setIsBottomSheetOpen(false);
          return true;
        }
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [isBottomSheetOpen]),
  );

  const handleAudio = (title, news, urlToImage) => {
    navigation.navigate('AudioTab', {
      title: title,
      news: news,
      urlToImg: urlToImage,
    });
  };

  const handleMore = () => {
    setIsBottomSheetOpen(true);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand(); // Open the bottom sheet
    }
  };

  const handleSheetClose = () => {
    setIsBottomSheetOpen(false);
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

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="top"
        textColor={colors.text}
        actionTextColor={colors.text}
      />

      {isLoading ? (
        <Loader />
      ) : articles?.length > 0 ? (
        <>
          <Swiper
            key={theme}
            ref={swiperRef}
            cards={articles}
            cardIndex={0}
            renderCard={(article, index) => {
              return (
                <NewsCard
                  key={index}
                  articleId={article?.articleId}
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
                  onMore={handleMore}
                  onPress={() => handlePress(article.url)}
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
          {isBottomSheetOpen && (
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={['15%', '25%', '50%']}
              onClose={handleSheetClose}
              enablePanDownToClose={true}
              backgroundStyle={{backgroundColor: colors.background}}>
              <BottomSheetView
                style={[
                  styles.bottomSheetContainer,
                  {backgroundColor: colors.background},
                ]}>
                <Image
                  source={ICONS.BIN}
                  style={[styles.icon, {tintColor: colors.text}]}
                />
                <Text style={[styles.report, {color: colors.text}]}>
                  Report Content
                </Text>
              </BottomSheetView>
            </BottomSheet>
          )}
        </>
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
