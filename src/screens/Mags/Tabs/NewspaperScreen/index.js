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

const NewspaperScreen = ({navigation}) => {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentWrapper}>
        {/* <View style={MagazineStyles.section}>
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
        </View> */}
        <View style={MagazineStyles.section}>
          <Text style={[MagazineStyles.heading, {color: colors.text}]}>
            Today's Newspapers
          </Text>
          <View style={MagazineStyles.magazineContainer}>
            {dataNewspapers.map((item, index) => {
              return (
                <NewspaperItem
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

export default NewspaperScreen;
