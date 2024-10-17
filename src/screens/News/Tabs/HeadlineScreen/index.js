import {View, BackHandler, VirtualizedList} from 'react-native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Header, ReportContent, NewsBulletin} from '../../../../components/News';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useGetNewsArticlesQuery} from '../../../../redux/api/News/newsApi';
import {
  Loader,
  Snackbar,
  ConfirmationModal,
} from '../../../../components/Common';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {verticalScale} from '../../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const HeadlineScreen = ({navigation}) => {
  const [params, setParams] = useState({
    q: '',
    language: 'en',
    from: '2024-10-01',
    to: '2024-10-06',
    sortBy: 'popularity',
  });
  const [activeCategory, setActiveCategory] = useState('For You');
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [headlines, setHeadlines] = useState([]);

  const {colors} = useTheme();
  const {t} = useTranslation();
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const query = newsTopics[0]?.name;

  const {
    isLoading: apiLoading,
    data,
    error,
    isFetching,
  } = useGetNewsArticlesQuery({
    ...params,
    page,
  });

  const bottomSheetRef = useRef();
  const confirmationModalRef = useRef();

  const handleCancel = () => {
    confirmationModalRef.current.close();
  };
  const handleConfirm = () => {
    BackHandler.exitApp();
    return true;
  };

  const NewsBulletinMemo = memo(NewsBulletin);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (confirmationModalRef.current) {
          confirmationModalRef.current.open();
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  const calculateReadingTime = text => {
    const wpm = 200;
    const words = text?.trim()?.split(/\s+/)?.length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  useEffect(() => {
    if (data && data.length > 0 && params.q) {
      setLoading(false);
      setHeadlines(data);
    } else if (error) {
      setLoading(false);
      setHeadlines([]);
    } else {
      setLoading(false);
      setHeadlines([]);
    }
  }, [data, params, error]);

  useEffect(() => {
    setHeadlines([]);
    setLoading(false);
  }, [params.q]);

  // console.log('error: ', error);
  // console.log('loading..', loading);
  // console.log('apiLoading: ', apiLoading);

  useEffect(() => {
    if (activeCategory === 'For You') {
      setParams(prevParams => ({...prevParams, q: query}));
    } else {
      setParams(prevParams => ({
        ...prevParams,
        q: activeCategory,
      }));
    }
  }, [activeCategory, query, data]);

  const handlePress = newsUrl => {
    navigation.navigate('NewsRead', {
      url: newsUrl,
    });
  };

  const handleMore = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  const handleReport = () => {
    setIsVisible(true);
    setMessage(t('screens.headlines.snackbar.content_reported'));
    bottomSheetRef.current.close();
  };

  const loadMoreNews = () => {
    if (!isFetching) {
      setPage(prevPage => prevPage + 1); // Increase page number to load more data
    }
  };

  const renderItem = useCallback(({item, index}) => {
    const readTime = calculateReadingTime(item?.content);
    return (
      <NewsBulletinMemo
        key={index}
        heading={item?.title}
        readTime={readTime}
        source={item?.source.name}
        urlToImage={item?.urlToImage}
        handlePress={() => handlePress(item?.url)}
        handleMore={() => handleMore()}
      />
    );
  }, []);

  const renderFooterComponent = () => {
    if (data && data.length > 0 && (apiLoading || isFetching) && !loading) {
      return <Loader />;
    }
    return null;
  };

  const getItemCount = _data => _data?.length || 0;

  const getItem = (_data, index) => _data[index];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <VirtualizedList
            ListHeaderComponent={
              <Header
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                params={params}
                isLoading={apiLoading || loading}
                error={error}
              />
            }
            getItemCount={getItemCount}
            getItem={getItem}
            data={headlines}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id || index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.newsHeadlineList}
            ListFooterComponent={renderFooterComponent}
            onEndReached={loadMoreNews}
            onEndReachedThreshold={0.5}
            // initialNumToRender={10} // Adjust based on your content
            // maxToRenderPerBatch={5} // Adjust based on performance
            // windowSize={5}
            // removeClippedSubviews={true}
            // pagingEnabled={true}
          />

          <ReportContent ref={bottomSheetRef} handleReport={handleReport} />
        </View>
      </View>
      <ConfirmationModal
        ref={confirmationModalRef}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        actionText={t('screens.headlines.text.action_text')}
        confirmText={t('screens.headlines.text.confirm_text')}
        btnHeight={verticalScale(50)}
        height={verticalScale(180)}
      />
      <Snackbar
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        onActionPress={() => setIsVisible(false)}
        position="bottom"
        textColor={colors.snackBarTxt}
      />
    </>
  );
};

export default HeadlineScreen;
