import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../../components/Common/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
import {STRINGS} from '../../../constants/Strings';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveNewsTopics} from '../../../redux/actions/user/userActions';
import Snackbar from '../../../components/Common/Snackbar';

const CategoryScreen = () => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'Business', active: false},

    {id: 2, name: 'Technology', active: false},
    {
      id: 3,
      name: 'General',
      active: false,
    },
    {
      id: 4,
      name: 'Science',
      active: false,
    },
    {id: 5, name: 'Health', active: false},
    {
      id: 6,
      name: 'Sports',
      active: false,
    },
    {
      id: 7,
      name: 'Entertainment',
      active: false,
    },
  ]);
  const [disable, setDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const {colors} = useTheme();
  const dispatch = useDispatch();
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const navigation = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, []);

  const handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    const activeCount = categories.filter(category => category.active).length;
    setDisable(activeCount > 2);
  }, [categories]);

  useEffect(() => {
    if (newsTopics && newsTopics.length !== 0) {
      const topics = newsTopics.map(topic => topic.id);
      setCategories(prevCategories =>
        prevCategories.map(category => {
          if (topics.includes(category.id)) {
            return {...category, active: true};
          }
          return category;
        }),
      );
    } else {
      return;
    }
  }, [newsTopics]);

  const handleSelectionChange = id => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === id) {
          return {...category, active: !category.active};
        }
        return category;
      }),
    );
  };

  const handleDonePress = () => {
    const selectedCategories = categories.filter(category => category.active);
    if (selectedCategories.length < 2) {
      setIsVisible(true);
      setMessage('Please select atleast two categories!');
      return;
    } else {
      dispatch(saveNewsTopics(selectedCategories));
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="top"
        textColor={colors.text}
        actionTextColor={colors.text}
      />
      <Text style={[styles.headerTitle, {color: colors.text}]}>Category</Text>
      <Text style={[styles.subTitle, {color: colors.text}]}>
        Please select atleast 2 not more categories to customize your
        experience!
      </Text>
      <View style={styles.categoryContainer}>
        {categories.map(({id, name, active}) => {
          return (
            <TouchableOpacity
              key={id}
              style={[
                styles.categoryCard,
                {
                  backgroundColor: colors.tileBackground,
                  borderColor: active ? colors.border : colors.background,
                },
              ]}
              onPress={() => handleSelectionChange(id)}>
              <Text style={[styles.categoryText, {color: colors.tileText}]}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
        bgColor={disable ? colors.tileBackground : colors.btnBackground}
        text={STRINGS.DONE}
        textColor={colors.text}
        width={'100%'}
        onPress={handleDonePress}
        disable={disable}
      />
    </View>
  );
};

export default CategoryScreen;
