import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../styles/metrics';
import {ICONS} from '../../../constants';

const CouponInput = ({searchInput, setSearchInput, handleSearch}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.inputContainer, {backgroundColor: '#F5F5F7'}]}>
      <Image
        source={ICONS.SEARCH}
        style={[styles.searchIcon, {tintColor: '#333'}]}
      />
      <TextInput
        placeholder="Search here"
        placeholderTextColor={'lightgray'}
        style={[styles.searchInput, {backgroundColor: '#F5F5F7'}]}
        value={searchInput}
        onChangeText={text => {
          setSearchInput(text);
          handleSearch(text);
        }}
      />
      {searchInput ? (
        <Text style={styles.cancelText} onPress={() => setSearchInput('')}>
          Clear
        </Text>
      ) : (
        <Pressable onPress={() => navigation.navigate('CouponScan')}>
          <Image
            source={ICONS.QR_CODE}
            style={[styles.qrCodeIcon, {tintColor: '#333'}]}
          />
        </Pressable>
      )}
    </View>
  );
};

const CouponSearchPlaceholder = ({
  setSearchPlaceholder,
  coupons,
  setSelectedBrand,
}) => {
  const {colors} = useTheme();

  const [searchInput, setSearchInput] = useState('');
  const [filteredBrands, setFilteredBrands] = useState(null);

  const handleCouponSearch = text => {
    const filtered = coupons.filter(coupon =>
      coupon.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredBrands(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, {backgroundColor: colors.background}]}>
        <Pressable
          onPress={() => setSearchPlaceholder(false)}
          android_ripple={{
            color: 'lightgray',
            borderless: false,
            radius: moderateScale(12),
          }}>
          <Image
            source={ICONS.BACK_ARROW}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>

        <Text style={[styles.headerText, {color: colors.text}]}>Coupons</Text>
      </View>
      <View style={[styles.content, {backgroundColor: 'white'}]}>
        <View style={styles.subHeader}>
          <CouponInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleCouponSearch}
          />
          <Text
            style={styles.cancelText}
            onPress={() => setSearchPlaceholder(false)}>
            Cancel
          </Text>
        </View>
        {filteredBrands && filteredBrands.length > 0 ? (
          <View style={styles.searchResults}>
            <Text
              style={styles.brandLink}
              onPress={() => setSearchPlaceholder(false)}>
              Brands
            </Text>
            {filteredBrands?.map((brand, index) => {
              return (
                <Text
                  style={styles.brandLink}
                  key={index}
                  onPress={() => {
                    setSelectedBrand(brand);
                    setSearchPlaceholder(false);
                  }}>
                  {brand?.name}
                </Text>
              );
            })}
          </View>
        ) : (
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Image source={ICONS.TRENDING} style={styles.trendIcon} />
              <Text style={styles.listHeadText}>Trending Stores</Text>
            </View>
            <ScrollView
              style={styles.list}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}>
              {coupons?.map((coupon, index) => (
                <Pressable
                  android_ripple={{
                    color: 'lightgray',
                    borderless: false,
                    radius: moderateScale(10),
                  }}
                  key={index}
                  style={styles.brandContainer}
                  onPress={() => {
                    setSelectedBrand(coupon);
                    setSearchPlaceholder(false);
                  }}>
                  <Image source={coupon.logo} style={styles.brandImg} />
                  <View style={styles.textContainer}>
                    <Text style={styles.brandText}>{coupon.name}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default CouponSearchPlaceholder;
