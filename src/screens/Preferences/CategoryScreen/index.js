import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import {Snackbar, ConfirmationModal, Button} from '../../../components/Common';
import {useFocusEffect, useTheme} from '@react-navigation/native';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeCategory,
  saveNewsTopics,
} from '../../../redux/actions/user/userActions';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {useTranslation} from 'react-i18next';

const CategoryScreen = ({route, navigation}) => {
  const {t} = useTranslation();
  const initialCategories = useMemo(
    () => [
      {
        id: 1,
        name: t('screens.category.text.categories.business'),
        active: false,
      },
      {
        id: 2,
        name: t('screens.category.text.categories.technology'),
        active: false,
      },
      {
        id: 3,
        name: t('screens.category.text.categories.general'),
        active: false,
      },
      {
        id: 4,
        name: t('screens.category.text.categories.science'),
        active: false,
      },
      {
        id: 5,
        name: t('screens.category.text.categories.health'),
        active: false,
      },
      {
        id: 6,
        name: t('screens.category.text.categories.sports'),
        active: false,
      },
      {
        id: 7,
        name: t('screens.category.text.categories.entertainment'),
        active: false,
      },
    ],
    [t],
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
  const navigateFromScreen = route.params?.navigateFrom || 'login';

  const confirmationModalRef = useRef();

  const handleCancel = () => {
    console.log('handle cancel called.');
    confirmationModalRef.current.close();
  };
  const handleConfirm = () => {
    console.log('handle confirm called.');
    BackHandler.exitApp();
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigateFromScreen === 'login') {
          console.log('navigateFromLogin');
          if (confirmationModalRef.current) {
            confirmationModalRef.current.open();
            console.log('modal open');
            return true;
          }
        } else if (navigateFromScreen === 'settings') {
          console.log('navigateFromSettings');
          // navigation.goBack();
          dispatch(changeCategory(false)); // Go back to the previous screen in case of settings
          navigation.navigate('Drawer');
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        subscription.remove();
      };
    }, [navigateFromScreen, dispatch, navigation]),
  );

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
      setMessage(t('screens.category.text.snackbar.error'));
      return;
    }
    // Save the selected categories
    dispatch(saveNewsTopics(selectedCategories));

    // Handle the case if it's category change from settings
    if (user.isCategoryChange) {
      dispatch(changeCategory(false));
    }
  }, [categories, dispatch, user.isCategoryChange, t]);

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <View style={styles.contentWrapper}>
          <View style={[styles.headerWrapper]}>
            <Text style={[styles.headerTitle, {color: colors.text}]}>
              {t('screens.category.title')}
            </Text>
          </View>

          <Text style={[styles.subTitle, {color: colors.text}]}>
            {t('screens.category.subtitle')}
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
              text={t('screens.category.text.btn.done')}
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
      <ConfirmationModal
        ref={confirmationModalRef}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        confirmText={t('screens.category.text.confirm_text')}
        actionText={t('screens.category.text.action_text')}
        height={verticalScale(150)}
        btnHeight={verticalScale(50)}
      />
    </>
  );
};

export default CategoryScreen;
