import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import BannerTicker from '../../../Common/BannerTicker';
import {horizontalScale, verticalScale} from '../../../../styles/metrics';
import {FallBackUI, Loader} from '../../../Common';

const Header = ({
  activeCategory,
  setActiveCategory,
  params,
  error,
  isLoading,
}) => {
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
      {/* {isLoading ? <Loader /> : null} */}
      {error ? (
        <FallBackUI
          fallbackType={'error'}
          errorMessage={error?.data?.message}
          iconWidth={horizontalScale(100)}
          iconHeight={verticalScale(100)}
        />
      ) : null}
    </View>
  );
};

export default Header;
