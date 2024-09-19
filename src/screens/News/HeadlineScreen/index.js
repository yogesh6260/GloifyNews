import {View, FlatList, BackHandler} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {Header, ReportContent, NewsBulletin} from '../../../components/News';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useGetNewsArticlesQuery} from '../../../redux/api/News/newsApi';
import {Loader, Snackbar} from '../../../components/Common';
import {useFocusEffect, useTheme} from '@react-navigation/native';

const HeadlineScreen = ({navigation}) => {
  const [params, setParams] = useState({
    q: '',
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-04',
    sortBy: 'popularity',
  });
  const [activeCategory, setActiveCategory] = useState('For You');
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const {colors} = useTheme();

  const newsTopics = useSelector(state => state.user.preference.newsTopics);

  const query = newsTopics[0]?.name;

  const {isLoading, data, error} = useGetNewsArticlesQuery(params);
  const bottomSheetRef = useRef();

  // const NewsBulletinMemo = memo(NewsBulletin);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Summary');
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation]),
  );

  const calculateReadingTime = text => {
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  };

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
    setMessage('Content Reported!');
    bottomSheetRef.current.close();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <FlatList
            ListHeaderComponent={
              <Header
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                params={params}
              />
            }
            data={data}
            renderItem={({item, index}) => {
              const readTime = calculateReadingTime(item.content);
              return (
                <NewsBulletin
                  key={index}
                  heading={item.title}
                  readTime={readTime}
                  source={item.source.name}
                  urlToImage={item.urlToImage}
                  handlePress={() => handlePress(item.url)}
                  handleMore={() => handleMore()}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.newsHeadlineList}
            ListFooterComponent={isLoading && <Loader />}
          />

          <ReportContent ref={bottomSheetRef} handleReport={handleReport} />
        </View>
      </View>
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
