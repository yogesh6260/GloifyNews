import {FlatList, View} from 'react-native';
import React, {memo, useCallback, useRef, useState, useEffect} from 'react';
import {NewsBulletin, SearchHeader, ReportContent} from '../../components/News';
import {Loader, Snackbar, FallBackUI} from '../../components/Common';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useGetNewsArticlesQuery} from '../../redux/api/News/newsApi';
import SearchScreenPlaceholder from '../../components/News/SearchScreenPlaceholder';

const SearchScreen = ({navigation}) => {
  const {colors} = useTheme();

  const [params, setParams] = useState({
    q: '',
    sources: '',
    language: 'en',
    from: '2024-10-01',
    to: '2024-10-04',
    sortBy: 'popularity',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('q');
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const NewsBulletinMemo = memo(NewsBulletin);

  const bottomSheetRef = useRef(null);

  const {data, isLoading, error} = useGetNewsArticlesQuery(params);
  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('error: ', error);

  const handleSearch = useCallback(() => {
    if (searchType === 'q') {
      setParams({...params, q: searchQuery, sources: ''});
    } else if (searchType === 'category') {
      setParams({...params, q: searchQuery, sources: ''});
    } else if (searchType === 'source') {
      setParams({...params, sources: searchQuery, q: ''});
    }
  }, [searchQuery, searchType, params]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else if (data && data.length > 0) {
      setLoading(false);
      setSearchResults(data);
    } else {
      setLoading(false);
      setSearchResults([]);
    }
  }, [data, isLoading, searchQuery]);

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
    const words = text?.trim()?.split(/\s+/)?.length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  const handleMore = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open(); // Open the bottom sheet
    }
  };

  const handleReport = () => {
    setIsVisible(true);
    setMessage('Content Reported!');
    bottomSheetRef.current.close();
  };

  return (
    <>
      <SearchHeader
        searchQuery={searchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleSearchTypeChange={handleSearchTypeChange}
      />

      {searchQuery === '' ? (
        <SearchScreenPlaceholder
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />
      ) : (
        <>
          {isLoading || loading ? (
            <Loader />
          ) : data && data.length > 0 ? (
            <>
              <View
                style={[
                  styles.contentWrapper,
                  {backgroundColor: colors.background},
                ]}>
                <FlatList
                  data={searchResults}
                  renderItem={({item, index}) => {
                    const readTime = calculateReadingTime(item?.description);
                    return (
                      <NewsBulletinMemo
                        key={index}
                        heading={item?.title}
                        readTime={readTime}
                        source={item?.source.name}
                        handlePress={() => handlePress(item.url)}
                        urlToImage={item?.urlToImage}
                        handleMore={handleMore}
                      />
                    );
                  }}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.searchResults}
                  ListFooterComponent={<View style={styles.footerPadding} />}
                  scrollEventThrottle={16}
                  decelerationRate={'fast'}
                />
              </View>
              <ReportContent ref={bottomSheetRef} handleReport={handleReport} />
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
          ) : (
            <FallBackUI fallbackType={'query'} />
          )}
        </>
      )}
    </>
  );
};

export default SearchScreen;
