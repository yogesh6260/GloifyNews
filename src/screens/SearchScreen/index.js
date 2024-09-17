import {FlatList} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';
import {NewsBulletin, SearchHeader, ReportContent} from '../../components/News';
import {Loader, Snackbar, FallBackUI} from '../../components/Common';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useGetNewsArticlesQuery} from '../../redux/api/News/newsApi';

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
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const NewsBulletinMemo = memo(NewsBulletin);

  const bottomSheetRef = useRef(null);

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

  const handleMore = () => {
    setIsBottomSheetOpen(true);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand(); // Open the bottom sheet
    }
  };

  const handleReport = () => {
    setIsVisible(true);
    setMessage('Content Reported!');
    setIsBottomSheetOpen(false);
  };

  const handleSheetClose = () => {
    setIsBottomSheetOpen(false);
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
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <FlatList
            data={data}
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
          />
          {isBottomSheetOpen && (
            <ReportContent
              bottomSheetRef={bottomSheetRef}
              handleReport={handleReport}
              handleSheetClose={handleSheetClose}
            />
          )}
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
  );
};

export default SearchScreen;
