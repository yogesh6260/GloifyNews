import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {ICONS, IMAGES} from '../../../constants';
import {useTheme} from '@react-navigation/native';

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
    onPress={() => setSearchQuery(text)}>
    <Text style={[styles.trendingText, {color: colors.tileText}]}>{text}</Text>
  </TouchableOpacity>
);

const MagazineItem = ({item, colors}) => (
  <View style={styles.magazineItem}>
    <Image source={item.image} style={styles.magazineImage} />
    <Text style={[styles.magazineTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.magazineDate, {color: colors.icon}]}>{item.date}</Text>
  </View>
);

const NewspaperItem = ({item, colors}) => (
  <View style={styles.newspaperItem}>
    <Image source={item.image} style={styles.newspaperImage} />
    <Text style={[styles.newspaperTitle, {color: colors.text}]}>
      {item.title}
    </Text>
    <Text style={[styles.newspaperDate, {color: colors.icon}]}>
      {item.date}
    </Text>
  </View>
);

const SearchScreenPlaceholder = ({setSearchQuery}) => {
  const {colors} = useTheme();
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
        />
      </View>
    </ScrollView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trendingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  trendingIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  trendingItem: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  trendingText: {
    fontSize: 14,
  },
  magazineItem: {
    marginRight: 15,
    width: width * 0.4,
    alignItems: 'center',
  },
  magazineImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  magazineTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  magazineDate: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  newspaperItem: {
    marginRight: 15,
    width: width * 0.3,
    alignItems: 'center',
  },
  newspaperImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  newspaperTitle: {
    marginTop: 8,
    fontSize: 14,

    textAlign: 'center',
  },
  newspaperDate: {
    fontSize: 12,

    marginTop: 4,
    textAlign: 'center',
  },
});

export default SearchScreenPlaceholder;
