import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {ICONS, IMAGES} from '../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import styles from './styles';
import {moderateScale, verticalScale} from '../../../styles/metrics';

const dataTrending = [
  'arkade developers ipo allotment status',
  'Hardik Pandya',
  'Chess Olympiad',
  'free fire max',
  'flipkart big billion sale 2024',
  'manba finance limited',
  'Virat Kohli',
];

const dataMagazines = [
  {
    id: 1,
    title: 'India Today English',
    date: '30 Sep 2024',
    image: IMAGES.MAGAZINE1,
  },
  {id: 2, title: 'OPEN', date: '30 Sep 2024', image: IMAGES.MAGAZINE2},
  {id: 3, title: "Man's World", date: 'Mar 2024', image: IMAGES.MAGAZINE3},
];

const dataNewspapers = [
  {
    id: 1,
    title: 'Hindustan Times',
    date: '24th September 2024',
    image: IMAGES.NEWSPAPER1,
  },
  {
    id: 2,
    title: 'Livemint',
    date: '24th September 2024',
    image: IMAGES.NEWSPAPER2,
  },
  {
    id: 3,
    title: 'Lokmat Times',
    date: '24th September 2024',
    image: IMAGES.NEWSPAPER3,
  },
  {
    id: 4,
    title: 'Sikkim Express',
    date: '24th September 2024',
    image: IMAGES.NEWSPAPER4,
  },
];

const TrendingItem = ({text, colors, setSearchQuery}) => (
  <TouchableOpacity
    style={[styles.trendingItem, {backgroundColor: colors.tileBackground}]}
    onPress={() => {
      setSearchQuery(text);
    }}>
    <Text style={[styles.trendingText, {color: colors.tileText}]}>{text}</Text>
  </TouchableOpacity>
);

const MagazineItem = ({item, colors}) => (
  <View
    style={[styles.magazineItem, {backgroundColor: colors.bulletinBackground}]}>
    <Image source={item.image} style={styles.magazineImage} />
    <Text style={[styles.magazineTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.magazineDate, {color: colors.icon}]}>{item.date}</Text>
  </View>
);

const NewspaperItem = ({item, colors}) => (
  <View
    style={[
      styles.newspaperItem,
      {backgroundColor: colors.bulletinBackground},
    ]}>
    <Image source={item.image} style={styles.newspaperImage} />
    <Text style={[styles.newspaperTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.newspaperDate, {color: colors.icon}]}>
      {item.date}
    </Text>
  </View>
);

const SeeMore = ({handlePress, colors, height}) => {
  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{
        color: 'lightgray',
        borderless: false,
        radius: moderateScale(10),
      }}
      style={[
        styles.seeMoreBtn,
        {backgroundColor: colors.tileBackground, height},
      ]}>
      <Text style={[styles.seeMoreText, {color: colors.text}]}>See More</Text>
      <Image
        source={ICONS.RIGHT}
        style={[styles.seeMoreIcon, {tintColor: colors.text}]}
      />
    </Pressable>
  );
};

const SearchScreenPlaceholder = ({
  setSearchQuery,
  searchQuery,
  handleSearch,
}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.heading, {color: colors.text}]}>Trending</Text>
          <Image
            source={ICONS.TRENDING}
            style={[styles.trendingIcon, {tintColor: colors.icon}]}
          />
        </View>
        <View style={styles.trendingContainer}>
          {dataTrending.map((item, index) => (
            <TrendingItem
              key={index}
              text={item}
              colors={colors}
              setSearchQuery={setSearchQuery}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, {color: colors.text}]}>
          Top Magazines
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataMagazines}
          renderItem={({item}) => <MagazineItem item={item} colors={colors} />}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <SeeMore
              colors={colors}
              handlePress={() =>
                navigation.navigate('BottomTab', {
                  screen: 'Mags & Papers',
                  params: {
                    screen: 'Magazines', // Targeting the Magazines tab
                  },
                })
              }
              height={verticalScale(270)}
            />
          }
        />
      </View>

      {/* Add the Top Newspapers Section in a similar way */}
      <View style={styles.section}>
        <Text style={[styles.heading, {color: colors.text}]}>
          Top Newspapers
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataNewspapers}
          renderItem={({item}) => <NewspaperItem item={item} colors={colors} />}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <SeeMore
              colors={colors}
              handlePress={() =>
                navigation.navigate('BottomTab', {
                  screen: 'Mags & Papers',
                  params: {
                    screen: 'Newspapers', // Targeting the Newspapers tab
                  },
                })
              }
              height={verticalScale(200)}
            />
          }
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreenPlaceholder;
