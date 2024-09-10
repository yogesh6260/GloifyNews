import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {
  useGetNewsArticlesQuery,
} from '../../../redux/api/News/newsApi';
import NewsBulletin from '../../../components/News/NewsBulletin';
import Header from '../../../components/News/Headline/Header';
import Loader from '../../../components/Common/Loader';

const HeadlineScreen = ({navigation}) => {
  const [params, setParams] = useState({
    q: '',
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-04',
    sortBy: 'popularity',
  });
  const [activeCategory, setActiveCategory] = useState('For You');
  const [articles, setArticles] = useState(null);
  const newsTopics = useSelector(state => state.user.preference.newsTopics);

  const query = newsTopics[0]?.name;

  const {isLoading, data, error} = useGetNewsArticlesQuery(params);

  const filterRemovedArticles = articles => {
    if (articles?.length !== 0) {
      return articles?.filter(article => article.title !== '[Removed]');
    }
  };

  const calculateReadingTime = text => {
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  useEffect(() => {
    const filteredArticles = filterRemovedArticles(data?.articles);
    setArticles(filteredArticles);
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

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Header
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            params={params}
          />
        }
        data={articles}
        renderItem={({item, index}) => {
          const readTime = calculateReadingTime(item.description);
          return (
            <NewsBulletin
              key={index}
              heading={item.title}
              readTime={readTime}
              source={item.source.name}
              urlToImage={item.urlToImage}
              handlePress={() => handlePress(item.url)}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.newsHeadlineList}
        ListFooterComponent={isLoading && <Loader />}
      />
    </View>
  );
};

export default HeadlineScreen;
