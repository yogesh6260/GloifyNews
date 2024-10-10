import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
// import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../constants';
import Active from '../../components/Polls/Active';
import Closed from '../../components/Polls/Closed';
import styles from './styles';
import {moderateScale} from '../../styles/metrics';

const PollScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Active');
  const {colors} = useTheme();
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
          <Text style={[styles.title, {color: colors.headerLabel}]}>Polls</Text>
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
          onPress={() => setActiveTab('Active')}
          style={[styles.tab, activeTab === 'Active' ? styles.activeTab : {}]}>
          <Text
            style={[
              styles.tabLabel,
              {color: activeTab === 'Active' ? colors.border : colors.text},
            ]}>
            Active
          </Text>
        </Pressable>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => setActiveTab('Closed')}
          style={[styles.tab, activeTab === 'Closed' ? styles.activeTab : {}]}>
          <Text
            style={[
              styles.tabLabel,
              {color: activeTab === 'Closed' ? colors.border : colors.text},
            ]}>
            Closed
          </Text>
        </Pressable>
      </View>
      {activeTab === 'Active' ? <Active /> : <Closed />}
    </View>
  );
};

export default PollScreen;
