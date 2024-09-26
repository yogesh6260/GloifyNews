import {
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
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
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
import {FONT_SIZE_16} from '../../styles/fontSize';

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

  const [backPressCount, setBackPressCount] = useState(0);

  const [categories, setCategories] = useState(initialCategories);
  const [disable, setDisable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {colors} = useTheme();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const newsTopics = useSelector(state => state.user.preference.newsTopics);
  const navigateFromScreen = route.params?.navigateFrom || 'login';

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
    // Save the selected categories
    dispatch(saveNewsTopics(selectedCategories));

    // Handle the case if it's category change from settings
    if (user.isCategoryChange) {
      dispatch(changeCategory(false));
    }
  }, [categories, dispatch, user.isCategoryChange]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigateFromScreen === 'login') {
          if (backPressCount < 1) {
            setBackPressCount(1);
            Alert.alert('Press again to exit', '', [
              {
                text: 'Cancel',
                onPress: () => setBackPressCount(0),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => BackHandler.exitApp()},
            ]);
            return true;
          } else {
            BackHandler.exitApp(); // Exit the app on double back press
          }
        } else if (navigateFromScreen === 'settings') {
          dispatch(changeCategory(false)); // Go back to the previous screen in case of settings
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        subscription.remove();
        setBackPressCount(0); // Reset back press count when leaving the screen
      };
    }, [backPressCount, navigateFromScreen, dispatch]),
  );

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View style={styles.contentWrapper}>
          <View style={[styles.headerWrapper]}>
            <Text style={[styles.headerTitle, {color: colors.text}]}>
              Category
            </Text>
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
          <View style={styles.btnWrapper}>
            <Button
              bgColor={
                disable ? colors.disableBtnBackground : colors.btnBackground
              }
              text={STRINGS.DONE}
              textColor={disable ? colors.disableBtnText : colors.btnText}
              textSize={FONT_SIZE_16}
              width={horizontalScale(320)}
              height={verticalScale(60)}
              onPress={handleDonePress}
              disable={disable}
              variant={disable ? 'contained' : 'elevated'}
              borderRadius={moderateScale(30)}
            />
          </View>
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
