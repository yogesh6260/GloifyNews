import {View, Text, ScrollView, FlatList, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import MagazineStyles from '../MagazineScreen/styles';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../../styles/metrics';
import {IMAGES} from '../../../../constants';

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

const NewspaperItem = ({item, colors}) => (
  <Pressable
    android_ripple={{
      color: 'lightgray',
      borderless: false,
      radius: moderateScale(10),
    }}
    style={[
      styles.newspaperItem,
      {backgroundColor: colors.bulletinBackground},
    ]}>
    <Image source={item.image} style={styles.newspaperImage} />
    <View style={styles.newspaperContent}>
      <Text style={[MagazineStyles.magazineTitle, {color: colors.text}]}>
        {item.title}
      </Text>
      <Text style={[MagazineStyles.magazineDate, {color: colors.icon}]}>
        {item.date}
      </Text>
    </View>
  </Pressable>
);

const NewspaperScreen = () => {
  const [newspaperLanguage, setNewspaperLanguages] = useState([
    {code: 'hi', name: 'हिंदी'},
    {code: 'ta', name: 'தமிழ்'},
    {code: 'bn', name: 'বাংলা'},
    {code: 'gu', name: 'ગુજરાતી'},
    {code: 'mr', name: 'मराठी'},
    {code: 'kn', name: 'ಕನ್ನಡ'},
    {code: 'ur', name: 'اردو'},
    {code: 'pa', name: 'ਪੰਜਾਬੀ'},
    {code: 'te', name: 'తెలుగు'},
    {code: 'or', name: 'ଓଡ଼ିଆ'},
    {code: 'as', name: 'অসমীয়া'},
    {code: 'ml', name: 'മലയാളം'},
  ]);
  const {colors, dark} = useTheme();
  return (
    <View style={MagazineStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={MagazineStyles.section}>
          <Text style={[MagazineStyles.heading, {color: colors.text}]}>
            Languages
          </Text>
          <FlatList
            data={newspaperLanguage}
            renderItem={({item, index}) => (
              <Pressable
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                  radius: moderateScale(10),
                }}
                key={index}
                style={[
                  MagazineStyles.languageTab,
                  {backgroundColor: colors.tileBackground},
                ]}>
                <Text
                  style={[
                    MagazineStyles.languageLabel,
                    {color: colors.border},
                  ]}>
                  {item.name}
                </Text>
              </Pressable>
            )}
            contentContainerStyle={{gap: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={MagazineStyles.section}>
          <Text style={[MagazineStyles.heading, {color: colors.text}]}>
            Today's Newspapers
          </Text>
          <View style={MagazineStyles.magazineContainer}>
            {dataNewspapers.map((item, index) => {
              return <NewspaperItem item={item} key={index} colors={colors} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewspaperScreen;
