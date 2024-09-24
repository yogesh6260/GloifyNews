import {View, Text, TouchableOpacity, Image, BackHandler} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {Snackbar, Button} from '../../components/Common';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {STRINGS, ICONS} from '../../constants';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeCategory,
  saveNewsTopics,
} from '../../redux/actions/user/userActions';
import {horizontalScale, verticalScale} from '../../styles/metrics';

const CategoryScreen = ({route, navigation}) => {
  const initialCategories = useMemo(
    () => [
      {id: 1, name: 'Business', active: false},
      {id: 2, name: 'Technology', active: false},
      {id: 3, name: 'General', active: false},
      {id: 4, name: 'Science', active: false},
      {id: 5, name: 'Health', active: false},
      {id: 6, name: 'Sports', active: false},
      {id: 7, name: 'Entertainment', active: false},
    ],
    [],
  );

  const [categories, setCategories] = useState(initialCategories);
  const [disable, setDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {colors} = useTheme();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const navigateFromScreen = route.params?.navigateFromScreen || 'login';

  useEffect(() => {
    setDisable(categories.filter(category => category.active).length > 2);
  }, [categories]);

  useEffect(() => {
    if (newsTopics?.length) {
      const topicsSet = new Set(newsTopics.map(topic => topic.id));
      setCategories(prevCategories =>
        prevCategories.map(category => ({
          ...category,
          active: topicsSet.has(category.id),
        })),
      );
    }
  }, [newsTopics]);

  const handleSelectionChange = useCallback(id => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === id ? {...category, active: !category.active} : category,
      ),
    );
  }, []);

  const handleDonePress = useCallback(() => {
    const selectedCategories = categories.filter(category => category.active);
    if (selectedCategories.length < 2) {
      setIsVisible(true);
      setMessageType('error');
      setMessage('Please select at least two categories!');
      return;
    }
    dispatch(saveNewsTopics(selectedCategories));
    if (user.isCategoryChange) {
      dispatch(changeCategory(false));
    }
  }, [categories, dispatch, user.isCategoryChange]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View style={styles.contentWrapper}>
          <View
            style={[
              styles.headerWrapper,
              navigateFromScreen === 'login' ? {justifyContent: 'center'} : {},
            ]}>
            <Text
              style={[
                styles.headerTitle,
                {color: colors.text},
                navigateFromScreen === 'login' ? {marginLeft: 0} : {},
              ]}>
              Category
            </Text>
            {navigateFromScreen === 'NewsTab' && (
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => navigation.navigate('NewsTab')}>
                <Image
                  source={ICONS.CLOSE}
                  style={[styles.closeIcon, {tintColor: colors.text}]}
                />
              </TouchableOpacity>
            )}
          </View>

          <Text style={[styles.subTitle, {color: colors.text}]}>
            Please select at least 2 but not more categories to customize your
            experience!
          </Text>
          <View style={styles.categoryContainer}>
            {categories.map(({id, name, active}) => (
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
            ))}
          </View>
          <Button
            bgColor={disable ? colors.tileBackground : colors.btnBackground}
            text={STRINGS.DONE}
            textColor={colors.btnText}
            width={horizontalScale(320)}
            height={verticalScale(50)}
            onPress={handleDonePress}
            disable={disable}
            variant="contained"
            // rippleColor={'orange'}
          />
        </View>
      </View>
      <Snackbar
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        onActionPress={() => setIsVisible(false)}
        position="top"
        textColor={colors.snackBarTxt}
        type={messageType}
      />
    </>
  );
};

export default CategoryScreen;
