import {View, Text, Pressable, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
// import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants';
import {Active, Closed} from '../../../components/Polls';
import styles from './styles';
import {moderateScale} from '../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const PollScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Active');
  const {colors} = useTheme();
  const {t} = useTranslation();

  useEffect(() => {
    setActiveTab(t('screens.polls.tabs.active'));
  }, [t]);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => navigation.navigate('Drawer')}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <View style={{flex: 1}}>
          <Text style={[styles.title, {color: colors.headerLabel}]}>
            {t('screens.polls.title')}
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => setActiveTab(t('screens.polls.tabs.active'))}
          style={[
            styles.tab,
            activeTab === t('screens.polls.tabs.active')
              ? styles.activeTab
              : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {
                color:
                  activeTab === t('screens.polls.tabs.active')
                    ? colors.border
                    : colors.text,
              },
            ]}>
            {t('screens.polls.tabs.active')}
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => setActiveTab(t('screens.polls.tabs.closed'))}
          style={[
            styles.tab,
            activeTab === t('screens.polls.tabs.closed')
              ? styles.activeTab
              : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {
                color:
                  activeTab === t('screens.polls.tabs.closed')
                    ? colors.border
                    : colors.text,
              },
            ]}>
            {t('screens.polls.tabs.closed')}
          </Text>
        </Pressable>
      </View>
      {activeTab === t('screens.polls.tabs.active') ? <Active /> : <Closed />}
    </View>
  );
};

export default PollScreen;
