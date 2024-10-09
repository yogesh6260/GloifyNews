import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {ICONS} from '../../constants';
import Magazines from '../../components/Download/Magazines';
import Newspapers from '../../components/Download/Newspapers';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const DownloadScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Magazines');
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <View style={{flex: 1}}>
          <Text style={[styles.title, {color: colors.headerLabel}]}>
            Downloads
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setActiveTab('Magazines')}
          style={[
            styles.tab,
            activeTab === 'Magazines' ? styles.activeTab : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {color: activeTab === 'Magazines' ? colors.border : colors.text},
            ]}>
            Magazines
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('Newspapers')}
          style={[
            styles.tab,
            activeTab === 'Newspapers' ? styles.activeTab : {},
          ]}>
          <Text
            style={[
              styles.tabLabel,
              {color: activeTab === 'Newspapers' ? colors.border : colors.text},
            ]}>
            Newspapers
          </Text>
        </Pressable>
      </View>
      {activeTab === 'Magazines' ? <Magazines /> : <Newspapers />}
    </View>
  );
};

export default DownloadScreen;
