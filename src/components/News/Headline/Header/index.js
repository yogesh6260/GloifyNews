import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {useGetHeadlineSourcesQuery} from '../../../../redux/api/News/newsApi';
import Loader from '../../../Common/Loader';
import {IMAGES} from '../../../../constants/Images';
import FallBackUI from '../../../Common/FallBackUI';

const Header = ({activeCategory, setActiveCategory, params}) => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'For You'},
    {id: 2, name: 'Business'},

    {id: 3, name: 'Technology'},
    {
      id: 4,
      name: 'General',
    },
    {
      id: 5,
      name: 'Science',
    },
    {id: 6, name: 'Health'},
    {
      id: 7,
      name: 'Sports',
    },
    {
      id: 8,
      name: 'Entertainment',
    },
  ]);

  const {colors} = useTheme();

  const {isLoading, data, error} = useGetHeadlineSourcesQuery(params);

  return (
    <View>
      <View style={styles.categoryHeader}>
        <FlatList
          data={categories}
          renderItem={({item, index}) => {
            return (
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
            );
          }}
          contentContainerStyle={{gap: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          windowSize={5}
        />
      </View>
      <View style={styles.newsChannels}>
        {isLoading ? (
          <Loader />
        ) : data && data.sources ? (
          <FlatList
            data={data.sources}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.Circle}>
                  <Image source={IMAGES.CHANNEL} style={styles.circleImg} />
                  <Text style={[styles.circleLabel, {color: colors.text}]}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
            contentContainerStyle={styles.newsChannelFlatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View>
            <FallBackUI
              fallbackType={'fetch'}
              errorMessage={error?.data?.message}
              iconWidth={20}
              iconHeight={20}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
