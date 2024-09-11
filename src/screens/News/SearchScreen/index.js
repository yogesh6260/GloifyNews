import {FlatList} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import NewsBulletin from '../../../components/News/NewsBulletin';
import {useGetNewsArticlesQuery} from '../../../redux/api/News/newsApi';
import Header from '../../../components/News/Search/Header';
import FallBackUI from '../../../components/Common/FallBackUI';
import Loader from '../../../components/Common/Loader';

const SearchScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [params, setParams] = useState({
    q: '',
    sources: '',
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-04',
    sortBy: 'popularity',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('q');

  const NewsBulletinMemo = memo(NewsBulletin);

  const {data, isLoading, error} = useGetNewsArticlesQuery(params);

  const handleSearch = () => {
    if (searchType === 'q') {
      setParams({...params, q: searchQuery, sources: ''});
    } else if (searchType === 'category') {
      setParams({...params, q: searchQuery, sources: ''});
    } else if (searchType === 'source') {
      setParams({...params, sources: searchQuery, q: ''});
    }
  };
  const handleSearchTypeChange = type => {
    setSearchType(type);
    setSearchQuery('');
  };

  const handlePress = useCallback(
    newsUrl => {
      navigation.navigate('NewsRead', {
        url: newsUrl,
      });
    },
    [navigation],
  );

  const calculateReadingTime = text => {
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  return (
    <>
      
      <Header
        searchQuery={searchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSearchTypeChange={handleSearchTypeChange}
      />
      {isLoading ? (
        <Loader />
      ) : data && data.articles ? (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            const readTime = calculateReadingTime(item.description);
            return (
              <NewsBulletinMemo
                key={index}
                heading={item.title}
                readTime={readTime}
                source={item.source.name}
                handlePress={() => handlePress(item.url)}
                urlToImage={item.urlToImage}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.searchResults}
        />
      ) : (
        <FallBackUI fallbackType={'query'} />
      )}
    </>
  );
};

export default SearchScreen;
