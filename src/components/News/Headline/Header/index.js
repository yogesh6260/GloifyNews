import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import BannerTicker from '../../../Common/BannerTicker';
import {verticalScale} from '../../../../styles/metrics';

const Header = ({activeCategory, setActiveCategory, params}) => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'For You'},
    {id: 2, name: 'Business'},
    {id: 3, name: 'Technology'},
    {id: 4, name: 'General'},
    {id: 5, name: 'Science'},
    {id: 6, name: 'Health'},
    {id: 7, name: 'Sports'},
    {id: 8, name: 'Entertainment'},
  ]);

  const {colors} = useTheme();

  return (
    <View style={{height: verticalScale(300)}}>
      <View style={styles.categoryHeader}>
        <FlatList
          data={categories}
          renderItem={({item, index}) => (
            <TouchableOpacity
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
            </TouchableOpacity>
          )}
          contentContainerStyle={{gap: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <BannerTicker />
    </View>
  );
};

export default Header;
