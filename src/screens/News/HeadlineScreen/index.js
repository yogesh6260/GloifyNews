import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useGetNewsHeadlinesQuery} from '../../../redux/api/News/newsApi';
import NewsBulletin from '../../../components/News/NewsBulletin';
import Header from '../../../components/News/Headline/Header';
import Loader from '../../../components/Common/Loader';

const HeadlineScreen = () => {
  const [params, setParams] = useState({
    q: '',
    category: '',
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-04',
    sortBy: 'popularity',
  });
  const [activeCategory, setActiveCategory] = useState('For You');
  const newsTopics = useSelector(state => state.user.preference.newsTopics);

  const query = newsTopics[0]?.name;

  const {isLoading, data, error} = useGetNewsHeadlinesQuery(params);

  useEffect(() => {
    if (activeCategory === 'For You') {
      setParams(prevParams => ({...prevParams, q: '', category: query}));
    } else {
      setParams(prevParams => ({
        ...prevParams,
        q: '',
        category: activeCategory,
      }));
    }
  }, [activeCategory, query]);

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
        data={data?.articles}
        renderItem={({item, index}) => {
          return (
            <NewsBulletin
              key={index}
              heading={item.title}
              readTime={'20 min'}
              source={item.source.name}
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
