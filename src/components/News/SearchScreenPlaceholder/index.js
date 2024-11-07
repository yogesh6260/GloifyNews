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
import {MAGAZINES} from '../../../constants/Images';

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
    title: 'Fortune India',
    date: 'Feb 2022',
    image: MAGAZINES.FORTUNE_INDIA,
    pdfLink: 'https://www.fortuneindia.com/pdf/feb-2022.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 2,
    title: 'Business Today',
    date: 'Sep 2022',
    image: MAGAZINES.BUSINESS_TODAY,
    pdfLink: 'https://ebixcash.com/static/Common/pdf/Business-Today.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 3,
    title: 'India Today',
    date: 'July 2024',
    image: MAGAZINES.INDIA_TODAY,
    pdfLink:
      'https://library.iimtrichy.ac.in/wp-content/uploads/2024/07/India-Today-16-22-July-2024.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
];

const dataNewspapers = [
  {
    id: 1,
    title: 'Hindustan Times',
    date: '10th Feb 2014',
    image: IMAGES.NEWSPAPER1,
    pdfLink:
      'https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/1/8/6/990186/0/hindustantimesepaperhindustanlucknowhindi10feb2014.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 2,
    title: 'Livemint',
    date: '15th Jan 2019',
    image: IMAGES.NEWSPAPER2,
    pdfLink:
      'https://www.nipfp.org.in/media/medialibrary/2019/01/mint_ePaper_15012019.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 3,
    title: 'Lokmat Times',
    date: '24th April 2024',
    image: IMAGES.NEWSPAPER3,
    pdfLink:
      'https://www.aavas.in/uploads/images/auction/lokmat-times-aurangabad-931489336.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 4,
    title: 'Sikkim Express',
    date: '28th September 2023',
    image: IMAGES.NEWSPAPER4,
    pdfLink:
      'https://www.iusikkim.edu.in/press-clippings/International-Lawyers-Conference-Sep-23-24-2023.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
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

const MagazineItem = ({item, colors, navigation}) => (
  <Pressable
    android_ripple={{
      color: 'lightgray',
      borderless: false,
      radius: moderateScale(10),
    }}
    style={[styles.magazineItem, {backgroundColor: colors.bulletinBackground}]}
    onPress={() =>
      navigation.navigate('MagDetail', {
        item: item,
      })
    }>
    <Image source={item.image} style={styles.magazineImage} />
    <Text style={[styles.magazineTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.magazineDate, {color: colors.icon}]}>{item.date}</Text>
  </Pressable>
);

const NewspaperItem = ({item, colors, navigation}) => (
  <Pressable
    android_ripple={{
      color: 'lightgray',
      borderless: false,
      radius: moderateScale(10),
    }}
    style={[styles.newspaperItem, {backgroundColor: colors.bulletinBackground}]}
    onPress={() =>
      navigation.navigate('MagDetail', {
        item: item,
      })
    }>
    <Image source={item.image} style={styles.newspaperImage} />
    <Text style={[styles.newspaperTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.newspaperDate, {color: colors.icon}]}>
      {item.date}
    </Text>
  </Pressable>
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
          renderItem={({item}) => (
            <MagazineItem item={item} colors={colors} navigation={navigation} />
          )}
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
          renderItem={({item}) => (
            <NewspaperItem
              item={item}
              colors={colors}
              navigation={navigation}
            />
          )}
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
