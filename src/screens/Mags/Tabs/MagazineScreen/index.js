import {View, Text, FlatList, Pressable, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../../styles/metrics';
import {MAGAZINES} from '../../../../constants/Images';

const magazinesData = [
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
    title: 'Forbes India',
    date: '23 Aug 2024',
    image: MAGAZINES.FORBES_INDIA,
    pdfLink:
      'https://inkprint.in/wp-content/uploads/2024/09/August-23-2024-Forbes-Listicle-PG-93-to-102.pdf?srsltid=AfmBOoocuy5PQGf-m7WtwPpZxZi43AmahGjApwaDlGdHGbip-w7sXL09',
    publishedBy: 'Network 18',
    language: 'English',
    category: 'Business',
    frequency: 'Fortnightly',
  },
  {
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    title: 'Pratiyogita Darpan',
    date: 'Sep 2024',
    image: MAGAZINES.PD,
    pdfLink:
      'https://pietsanskritinfl.com/wp-content/uploads/2024/09/Pratiyogita-Darpan-Hindi-Sep-2024.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 6,
    title: 'Current Affairs',
    date: 'Dec 2021',
    image: MAGAZINES.CURRENT_AFFAIRS,
    pdfLink:
      'https://img.jagranjosh.com/imported/pdf/JagranJosh_CA_Dec_2021.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 7,
    title: 'Biology Today',
    date: 'April 2024',
    image: MAGAZINES.BIOLOGY_TODAY,
    pdfLink:
      'https://pietsanskritinfl.com/wp-content/uploads/2024/04/Biology-Today%E2%96%AA%EF%B8%8FApril%E2%96%AA%EF%B8%8F2024...pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 8,
    title: 'Chemistry Today',
    date: 'April 2024',
    image: MAGAZINES.CHEMISTRY_TODAY,
    pdfLink:
      'https://pietsanskritinfl.com/wp-content/uploads/2024/04/Chemistry-Today%E2%96%AA%EF%B8%8FApril%E2%96%AA%EF%B8%8F2024...pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 9,
    title: 'Mathematics Today',
    date: 'Sep 2024',
    image: MAGAZINES.MATHEMATICS_TODAY,
    pdfLink:
      'https://pietsanskritinfl.com/wp-content/uploads/2024/09/Mathematics-Today-%E2%97%8F-September-2024-%E2%97%8F-HD...pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 10,
    title: 'Physics For You',
    date: 'Sep 2024',
    image: MAGAZINES.PHYSICS_FORYOU,
    pdfLink:
      'https://pietsanskritinfl.com/wp-content/uploads/2024/09/Physics-For-You-%E2%97%8F-September-2024-%E2%97%8F-HD...pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 11,
    title: 'General Awareness',
    date: '20 Jun 2024',
    image: MAGAZINES.GENERAL_AWARENESS,
    pdfLink:
      'https://cdn.prod.website-files.com/5f6f7a7992bb619fb83011ab/66582f595a5c88c9ff0b7bac_English%20Gyanm%20General%20Awareness%20June%202024.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
  {
    id: 12,
    title: 'OPEN',
    date: '15 Feb 2021',
    image: MAGAZINES.OPEN,
    pdfLink:
      'https://openthemagazine.com/wp-content/uploads/2021/02/Final-PDF-for-WEB-15-02-21.pdf',
    publishedBy: 'Business Media',
    language: 'English',
    category: 'Business',
    frequency: 'Monthly',
  },
];

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
    <View style={styles.magazineContent}>
      <Text style={[styles.magazineTitle, {color: colors.text}]}>
        {item.title}
      </Text>
      <Text style={[styles.magazineDate, {color: colors.icon}]}>
        {item.date}
      </Text>
    </View>
  </Pressable>
);

const MagazineScreen = ({navigation}) => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'For You'},
    {id: 2, name: 'Business'},
    {id: 3, name: 'Children'},
    {id: 4, name: 'Entertainment'},
    {id: 5, name: 'Health, Mind & Soul'},
    {id: 6, name: 'News & Education'},
  ]);
  const [magazineLanguages, setMagazineLanguages] = useState([
    {code: 'hi', name: 'हिंदी'},
    {code: 'gu', name: 'ગુજરાતી'},
    {code: 'te', name: 'తెలుగు'},
  ]);
  const {colors, dark} = useTheme();
  const [activeCategory, setActiveCategory] = useState('For You');
  return (
    <View style={styles.container}>
      {/* <View style={styles.categoryHeader}>
        <FlatList
          data={categories}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={[
                styles.category,
                {
                  backgroundColor: colors.tileBackground,
                  borderColor:
                    activeCategory === item.name
                      ? colors.border
                      : colors.background,
                },
              ]}
              onPress={() => setActiveCategory(item.name)}>
              <Text style={[styles.categoryLabel, {color: colors.tileText}]}>
                {item.name}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={{gap: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentWrapper}>
        {/* <View style={styles.section}>
          <Text style={[styles.heading, {color: colors.text}]}>Languages</Text>
          <FlatList
            data={magazineLanguages}
            renderItem={({item, index}) => (
              <Pressable
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                  radius: moderateScale(10),
                }}
                key={index}
                style={[
                  styles.languageTab,
                  {backgroundColor: colors.tileBackground},
                ]}>
                <Text style={[styles.languageLabel, {color: colors.border}]}>
                  {item.name}
                </Text>
              </Pressable>
            )}
            contentContainerStyle={{gap: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View> */}
        <View style={styles.section}>
          <Text style={[styles.heading, {color: colors.text}]}>
            All Magazines
          </Text>
          <View style={styles.magazineContainer}>
            {magazinesData.map((item, index) => {
              return (
                <MagazineItem
                  item={item}
                  key={index}
                  colors={colors}
                  navigation={navigation}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MagazineScreen;
