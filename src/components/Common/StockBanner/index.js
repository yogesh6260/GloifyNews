import {View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Ticker from '../Ticker';
import {stockData, topGainers, topLosers} from '../../../data/LiveTickerData';
import styles from './styles';
import {ICONS, IMAGES} from '../../../constants';
import Button from '../Button';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_12} from '../../../styles/fontSize';

const StockBanner = ({
  scrollEnabled = true,
  autoPlay = true,
  autoPlayTimeout = 2,
  loop = true,
}) => {
  const renderStockData = data => {
    return data.map((item, index) => {
      const marketUp = item.change >= 0;
      return (
        <View key={index} style={styles.stockDataContainer}>
          <View style={styles.stockDataContent}>
            <Text style={styles.stockDataName}>{item.indexName}</Text>
            <Text style={styles.stockDataPrice}>{item.currentValue}</Text>
          </View>
          <View style={styles.stockDataContent}>
            <Text
              style={[
                styles.stockDataChange,
                {color: marketUp ? '#32CD32' : 'red'},
              ]}>
              {item.change}
            </Text>

            <View style={styles.stockDataSubContent}>
              <Image
                source={marketUp ? ICONS.HIGH : ICONS.LOW}
                style={[
                  styles.stockDataIcon,
                  marketUp ? {tintColor: 'lightgreen'} : {tintColor: 'red'},
                ]}
              />
              <Text
                style={[
                  styles.stockDataChangePercentage,
                  {color: marketUp ? '#32CD32' : 'red'},
                ]}>{`(${item.percentageChange}%)`}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  const renderTopGainersandLosers = (data, title) => {
    return (
      <View style={styles.topGainersandLosersContainer}>
        <Text style={styles.topGainersandLosersHeading}>{title}</Text>
        <View style={styles.topGainersandLosersContent}>
          {data.map((item, index) => {
            const marketUp = item.change >= 0;
            return (
              <View key={index} style={styles.topGainersandLosersContentRow}>
                <Text style={styles.topGainersandLosersName}>
                  {item?.symbol}
                </Text>
                <View style={styles.topGainersandLosersSubContent}>
                  <Text style={styles.topGainersandLosersPrice}>
                    {item?.price}
                  </Text>
                  <Text
                    style={[
                      styles.topGainersandLosersChange,
                      {color: marketUp ? 'lightgreen' : 'red'},
                    ]}>
                    {item?.change}
                  </Text>
                  <Image
                    source={marketUp ? ICONS.HIGH : ICONS.LOW}
                    style={[
                      styles.topGainersandLosersIcon,
                      {tintColor: marketUp ? 'lightgreen' : 'red'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.topGainersandLosersPercentageChange,
                      {color: marketUp ? 'lightgreen' : 'red'},
                    ]}>{`(${item?.percentageChange?.toFixed(2)}%)`}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <Button
          text={'Show more'}
          bgColor={'#af0d0d'}
          height={verticalScale(30)}
          width={horizontalScale(120)}
          textColor={'white'}
          variant="contained"
          textSize={FONT_SIZE_12}
          borderRadius={moderateScale(20)}
        />
      </View>
    );
  };
  return (
    <Swiper
      horizontal={true}
      autoplay={autoPlay}
      autoplayTimeout={autoPlayTimeout}
      showsPagination={true}
      loop={loop}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      scrollEnabled={scrollEnabled}>
      <Ticker
        children={renderStockData(stockData)}
        poweredBy={'Yahoo Finance'}
        background={IMAGES.STOCK_BANNER_BG}
      />
      <Ticker
        children={renderTopGainersandLosers(topGainers, 'TOP GAINERS')}
        poweredBy={'Yahoo Finance'}
        background={IMAGES.STOCK_BANNER_BG}
      />
      <Ticker
        children={renderTopGainersandLosers(topLosers, 'TOP LOSERS')}
        poweredBy={'Yahoo Finance'}
        background={IMAGES.STOCK_BANNER_BG}
      />
    </Swiper>
  );
};

export default StockBanner;
