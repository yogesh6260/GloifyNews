import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {ICONS} from '../../../constants';
import {Magazines, Newspapers} from '../../../components/Download';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {moderateScale} from '../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const DownloadScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Magazines');
  const {colors} = useTheme();
  const {t} = useTranslation();

  useEffect(() => {
    setActiveTab(t('screens.downloads.tabs.magazines'));
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
          onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <View style={{flex: 1}}>
          <Text style={[styles.title, {color: colors.headerLabel}]}>
            {t('screens.downloads.title')}
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
          onPress={() => setActiveTab(t('screens.downloads.tabs.magazines'))}
          style={[
            styles.tab,
            activeTab === t('screens.downloads.tabs.magazines')
              ? styles.activeTab
              : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {
                color:
                  activeTab === t('screens.downloads.tabs.magazines')
                    ? colors.border
                    : colors.text,
              },
            ]}>
            {t('screens.downloads.tabs.magazines')}
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => setActiveTab(t('screens.downloads.tabs.newspapers'))}
          style={[
            styles.tab,
            activeTab === t('screens.downloads.tabs.newspapers')
              ? styles.activeTab
              : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {
                color:
                  activeTab === t('screens.downloads.tabs.newspapers')
                    ? colors.border
                    : colors.text,
              },
            ]}>
            {t('screens.downloads.tabs.newspapers')}
          </Text>
        </Pressable>
      </View>
      {activeTab === t('screens.downloads.tabs.magazines') ? (
        <Magazines />
      ) : (
        <Newspapers />
      )}
    </View>
  );
};

export default DownloadScreen;
