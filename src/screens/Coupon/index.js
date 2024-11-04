import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {ICONS, IMAGES} from '../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import {moderateScale, verticalScale} from '../../styles/metrics';
import {Button} from '../../components/Common';
import {FONT_SIZE_12, FONT_SIZE_13} from '../../styles/fontSize';
import CouponModal from '../../components/Common/CouponModal';
import CouponSearchPlaceholder from '../../components/Coupon/CouponSearchPlaceholder';

const {width, height} = Dimensions.get('window');

const coupons = [
  {
    id: 1,
    logo: IMAGES.NET_MEDS,
    name: 'Netmeds',
    itemCount: 3,
    items: [
      {
        id: 'FREEDEL',
        couponName: 'Free delivery on Rs 750+ orders',
        couponDetails: 'Avail Free Delivery On Orders Above Rs 750',
        couponLink: 'https://www.netmeds.com/',
      },
      {
        id: 'NMSNEW',
        couponName: '25% off + 10% cashback + free shipping on first order',
        couponDetails:
          'Flat 25% off on your first meds order + up to 10% cash-in-wallet + free shipping. Minimum order value Rs. 1249',
        couponLink: 'https://www.netmeds.com/',
      },
      {
        id: 'NMS18',
        couponName: '18% off on medicines + 20% cashback',
        couponDetails:
          'Instant 18 Savings - Flat 18% OFF On Medicines + 20% Cashback',
        couponLink: 'https://www.netmeds.com/',
      },
    ],
  },
  {
    id: 2,
    logo: IMAGES.JIO_MART,
    name: 'Jio Mart',
    itemCount: 3,
    items: [
      {
        id: 'CURATE300',
        couponName: 'Rs 300 off on premium fruits over Rs 1599',
        couponDetails: 'FLAT Rs 300 OFF on Premium Fruits over rs 1599',
        couponLink: 'https://www.jiomart.com/',
      },
      {
        id: 'CURATE200',
        couponName: 'Rs 200 off on premium fruits over Rs 999',
        couponDetails: 'FLAT Rs 200 OFF on Premium Fruits over rs 999',
        couponLink: 'https://www.jiomart.com/',
      },
      {
        id: 'NMS18',
        couponName: 'Rs 100 off on premium fruits over Rs 699',
        couponDetails: 'FLAT Rs 100 OFF on Premium Fruits over rs 699',
        couponLink: 'https://www.jiomart.com/',
      },
    ],
  },
  {
    id: 3,
    logo: IMAGES.GAS,
    name: 'GAS',
    itemCount: 1,
    items: [
      {
        id: 'GAS15',
        couponName: 'Upto 60% Off + Extra 15% Off',
        couponDetails:
          'Minimum Order Value Rs. 1499 | Offer valid on your first purchase on GoFynd',
        couponLink: 'https://www.gofynd.com/products?brand=gas',
      },
    ],
  },
  {
    id: 4,
    logo: IMAGES.STEVE_MADDEN,
    name: 'STEVE MADDEN',
    itemCount: 1,
    items: [
      {
        id: 'STEVE15',
        couponName: 'Upto 60% Off + Extra 15% Off',
        couponDetails:
          'Minimum Order value Rs 1499 | Offer valid on your first purchase on GoFynd',
        couponLink: 'https://www.gofynd.com/I/K4Y5',
      },
    ],
  },
  {
    id: 5,
    logo: IMAGES.HAMLEYS,
    name: 'Hamleys',
    itemCount: 2,
    items: [
      {
        id: 'NEW10',
        couponName: 'Hamleys 10% Off Rs 2,499 Cart',
        couponDetails:
          'Take an extra 10% off when your cart value is above Rs 2,499.',
        couponLink:
          'https://www.hamleys.in/?srsItid=AfmBOoohKuFI0zfHpAIYSt3LvcywbR2Xp9KxCth-WRt_uwC_77IRrXRK',
      },
      {
        id: 'NEW5',
        couponName: 'Hamleys 5% Off Rs 999 Cart',
        couponDetails: 'Save an additional 5% on carts over Rs 999.',
        couponLink:
          'https://www.hamleys.in/?srsItid=AfmBOoohKuFI0zfHpAIYSt3LvcywbR2Xp9KxCth-WRt_uwC_77IRrXRK',
      },
    ],
  },
  {
    id: 6,
    logo: IMAGES.DIESEL,
    name: 'DIESEL',
    itemCount: 1,
    items: [
      {
        id: 'EXTRA10',
        couponName: 'Diesel Extra 10% Off Rs 15,000',
        couponDetails: 'Get 10% off on purchases over Rs 15,000',
        couponLink: 'https://www.dieselindia.com/',
      },
    ],
  },
  {
    id: 7,
    logo: IMAGES.TIRA,
    name: 'Tira',
    itemCount: 3,
    items: [
      {
        id: 'Tira500',
        couponName: 'Tira new user offer',
        couponDetails: 'Coupon Applicable on Minimum Order of 1599/-',
        couponLink: 'https://www.tirabeauty.com/',
      },
      {
        id: 'Tira20',
        couponName: 'Get upto 20% off',
        couponDetails: 'Coupon Applicable on Minimum Order Value of 1299/-',
        couponLink: 'https://www.tirabeauty.com/',
      },
      {
        id: 'Tira100',
        couponName: 'Up to Rs 100 off on Rs 599+ orders',
        couponDetails:
          'Enjoy up to Rs 100 off on minimum order value of Rs 599.',
        couponLink: 'https://www.tirabeauty.com/',
      },
    ],
  },
  {
    id: 8,
    logo: IMAGES.AJIO,
    name: 'AJIO',
    itemCount: 1,
    items: [
      {
        id: 'FREESHIP',
        couponName: 'Free shipping on first purchase',
        couponDetails: 'Shipping on us for Your First Purchase.',
        couponLink: 'https://www.ajio.com/',
      },
    ],
  },
  {
    id: 9,
    logo: IMAGES.GO_FYND,
    name: 'GoFynd',
    itemCount: 4,
    items: [
      {
        id: 'DIWALI15',
        couponName: 'Diwali offer for all users. Get flat 15% across website',
        couponDetails:
          'Get flat 15% off on all orders, valid on a minimum cart value of Rs 1499',
        couponLink: 'https://www.gofynd.com/I/Knqo',
      },
      {
        id: 'WELCOME15',
        couponName: 'Get flat 15% off',
        couponDetails:
          'Get flat 15% off on your first order, valid on a minimum cart value of Rs 1499',
        couponLink: 'https://www.gofynd.com/I/Knqx',
      },
      {
        id: 'GOFYND500',
        couponName: 'Get flat Rs 500 off',
        couponDetails:
          'Get flat Rs 500 off on all orders, valid on a minimum cart value of Rs 2500',
        couponLink: 'https://www.gofynd.com/I/KnoZ',
      },
      {
        id: 'GOFYND250',
        couponName: 'Get flat Rs 250 off',
        couponDetails:
          'Get flat Rs 250 off on all orders, valid on a minimum cart value of Rs 1299',
        couponLink: 'https://www.gofynd.com/I/KnqJ',
      },
    ],
  },
];

const CouponInput = ({
  colors,
  setSearchPlaceholder,
  focused,
  setFocused,
  navigation,
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: '#F5F5F7'},
        focused ? {borderWidth: 1, borderColor: 'orange'} : {},
      ]}>
      <Image
        source={ICONS.SEARCH}
        style={[styles.searchIcon, {tintColor: '#333'}]}
      />
      <TextInput
        placeholder="Search here"
        placeholderTextColor={colors.inputPlaceholder}
        style={[
          styles.searchInput,
          {backgroundColor: '#F5F5F7'},
          focused
            ? {
                borderTopWidth: 1,
                borderTopColor: 'orange',
                borderBottomColor: 'orange',
                borderBottomWidth: 1,
              }
            : {},
        ]}
        onPress={() => {
          setFocused(!focused);
          setTimeout(() => {
            setSearchPlaceholder(true);
          }, 1000);
        }}
      />
      <Pressable
        onPress={() => navigation.navigate('CouponScan')}
        android_ripple={{color: 'lightgray', borderless: false}}>
        <Image
          source={ICONS.QR_CODE}
          style={[styles.qrCodeIcon, {tintColor: '#333'}]}
        />
      </Pressable>
    </View>
  );
};

const Coupon = ({navigation}) => {
  const {colors, dark} = useTheme();
  const bottomSheetRef = useRef();
  const brandScrollRef = useRef(null);

  // State to track the selected brand
  const [selectedBrand, setSelectedBrand] = useState(coupons[6]);
  const [expandedCouponId, setExpandedCouponId] = useState(null);
  const [couponItem, setCouponItem] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [searchPlaceholder, setSearchPlaceholder] = useState(false);
  const [focused, setFocused] = useState(false);

  const toggleCouponDetails = id => {
    // Toggle the expanded state based on the coupon ID
    setExpandedCouponId(prevId => (prevId === id ? null : id));
  };

  const handleScroll = event => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const isAtTop = scrollY < 50;

  const handleViewCoupon = item => {
    setCouponItem(item);
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  useEffect(() => {
    const index = coupons.findIndex(brand => brand.id === selectedBrand.id);
    if (index !== -1 && brandScrollRef.current) {
      brandScrollRef.current.scrollTo({
        y: index * 70, // Adjust this based on the height of each brand item
        animated: true,
      });
    }
  }, [selectedBrand]);

  if (searchPlaceholder) {
    return (
      <CouponSearchPlaceholder
        setSearchPlaceholder={setSearchPlaceholder}
        coupons={coupons}
        setSelectedBrand={setSelectedBrand}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {backgroundColor: colors.background}]}>
        <Pressable
          onPress={() => navigation.navigate('Drawer')}
          android_ripple={{
            color: 'lightgray',
            borderless: false,
            radius: moderateScale(12),
          }}>
          <Image
            source={ICONS.MENU}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>

        <Text style={[styles.headerText, {color: colors.text}]}>Coupons</Text>
      </View>

      {/* Subheader */}
      <View style={[styles.subHeader, {backgroundColor: 'white'}]}>
        <Image source={IMAGES.FYND_COUPONS} style={styles.logo} />
        <CouponInput
          colors={colors}
          searchPlaceholder={searchPlaceholder}
          setSearchPlaceholder={setSearchPlaceholder}
          focused={focused}
          setFocused={setFocused}
          navigation={navigation}
        />
      </View>

      {/* Two ScrollViews: Brands and Coupons */}
      <View style={styles.content}>
        {/* Left ScrollView for Brands */}
        <ScrollView
          ref={brandScrollRef}
          showsVerticalScrollIndicator={false}
          style={[styles.sideScroll, {backgroundColor: '#F5F5F5'}]}
          contentContainerStyle={[styles.sideScrollContent]}>
          {coupons.map(brand => (
            <Pressable
              android_ripple={{
                color: 'lightgray',
                borderless: false,
                radius: moderateScale(10),
              }}
              key={brand.id}
              style={[
                styles.brandItem,
                {
                  backgroundColor:
                    selectedBrand?.id === brand.id ? '#FEF9F2' : 'white',
                },
                selectedBrand?.id === brand.id && {
                  borderWidth: 1,
                  borderColor: 'lightpink',
                },
              ]}
              onPress={() => setSelectedBrand(brand)}>
              <Image source={brand.logo} style={styles.brandLogo} />
            </Pressable>
          ))}
        </ScrollView>

        {/* Right ScrollView for Coupons */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          stickyHeaderIndices={[0]}
          style={[styles.contentScroll, {backgroundColor: 'white'}]}
          contentContainerStyle={styles.contentScrollContent}>
          <View
            style={[
              styles.brandHead,
              {
                borderBottomWidth: isAtTop ? 2 : 0,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[styles.brandName, {color: 'black'}]}>
              {selectedBrand?.name}
            </Text>
            <Text
              style={
                styles.couponCount
              }>{`${selectedBrand?.itemCount} coupons`}</Text>
          </View>
          {selectedBrand?.items.map(item => (
            <View key={item.id} style={styles.couponItem}>
              <View style={styles.couponHead}>
                <Text
                  style={
                    styles.brandNameInsideCoupon
                  }>{`${selectedBrand?.name} |`}</Text>
                <Text style={styles.verifiedLabel}>Verified</Text>
                <Image source={ICONS.CHECK} style={styles.checkIcon} />
              </View>
              <Text style={[styles.couponName, {color: 'black'}]}>
                {item.couponName}
              </Text>
              <View style={styles.btnContainer}>
                <Button
                  text={'View Coupon'}
                  textColor={'white'}
                  variant="contained"
                  bgColor={'#E3651D'}
                  width={'100%'}
                  height={verticalScale(38)}
                  borderRadius={moderateScale(8)}
                  weight="semibold"
                  textSize={FONT_SIZE_13}
                  onPress={() => handleViewCoupon(item)}
                />
              </View>
              <Pressable
                style={styles.expandedContainer}
                onPress={() => toggleCouponDetails(item.id)}>
                <Text style={[styles.showDetails, {color: 'black'}]}>
                  Show Details
                </Text>
                <Image
                  source={
                    expandedCouponId === item.id
                      ? ICONS.UP_ARROW
                      : ICONS.DOWN_ARROW
                  }
                  style={styles.dropDownIcon}
                />
              </Pressable>
              <View
                style={[
                  styles.footerContainer,
                  expandedCouponId === item.id
                    ? {display: 'flex'}
                    : {display: 'none'},
                ]}>
                <Text style={[styles.couponDetails, {color: 'black'}]}>
                  {item.couponDetails}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <CouponModal
        ref={bottomSheetRef}
        height={height - verticalScale(110)}
        selectedBrand={selectedBrand}
        item={couponItem}
      />
    </View>
  );
};

export default Coupon;
