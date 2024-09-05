import {StatusBar, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import NewsBulletin from '../../../components/News/NewsBulletin';
import {useGetNewsHeadlinesQuery} from '../../../redux/api/News/newsApi';
import Header from '../../../components/News/Search/Header';
import FallBackUI from '../../../components/Common/FallBackUI';
import Loader from '../../../components/Common/Loader';

const SearchScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [params, setParams] = useState({
    category: '',
    q: '',
    sources: '',
    language: 'en',
    from: '2024-09-01',
    to: '2024-09-04',
    sortBy: 'popularity',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('q');

  const {data, isLoading, error} = useGetNewsHeadlinesQuery(params);

  const handleSearch = () => {
    if (searchType === 'q') {
      setParams({...params, q: searchQuery, category: '', sources: ''});
    } else if (searchType === 'category') {
      setParams({...params, category: searchQuery, q: '', sources: ''});
    } else if (searchType === 'source') {
      setParams({...params, sources: searchQuery, q: '', category: ''});
    }
  };
  const handleSearchTypeChange = type => {
    setSearchType(type);
    setSearchQuery('');
  };

  return (
    <>
      <StatusBar backgroundColor={colors.tileBackground} />
      <Header
        navigation={navigation}
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
          data={data.articles}
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
          contentContainerStyle={styles.searchResults}
        />
      ) : (
        <FallBackUI fallbackType={'query'} />
      )}
    </>
  );
};

export default SearchScreen;
