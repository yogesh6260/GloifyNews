import {View, Text, FlatList, Pressable, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../../styles/metrics';
import {IMAGES} from '../../../../constants';

const magazinesData = [
  {
    id: 1,
    title: 'Fortune India',
    date: 'Oct 2024',
    image: IMAGES.MAGAZINE1,
  },
  {id: 2, title: 'Forbes India', date: '04 Oct 2024', image: IMAGES.MAGAZINE2},
  {
    id: 3,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 4,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 5,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 6,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 7,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 8,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
  {
    id: 9,
    title: 'Business Today',
    date: '13 Oct 2024',
    image: IMAGES.MAGAZINE3,
  },
];

const MagazineItem = ({item, colors}) => (
  <Pressable
    android_ripple={{
      color: 'lightgray',
      borderless: false,
      radius: moderateScale(10),
    }}
    style={[styles.magazineItem, {backgroundColor: colors.bulletinBackground}]}>
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

const MagazineScreen = () => {
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
      <View style={styles.categoryHeader}>
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
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
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
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, {color: colors.text}]}>
            All Magazines
          </Text>
          <View style={styles.magazineContainer}>
            {magazinesData.map((item, index) => {
              return <MagazineItem item={item} key={index} colors={colors} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MagazineScreen;
