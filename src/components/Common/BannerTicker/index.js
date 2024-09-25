import React, {useState, useEffect, useRef, Children} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

import {useGetStockDataQuery} from '../../../redux/api/Stocks/stockApi';
import {useGetMarketTrendsQuery} from '../../../redux/api/Stocks/marketGainersLosersApi';

import {formatStockMarketData} from '../../../utils/helpers'; // Assuming you have these helpers
import Ticker from '../Ticker';
import {ICONS} from '../../../constants';

import Button from '../Button';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_12} from '../../../styles/fontSize';

const BannerTicker = () => {
  const [stockData, setStockData] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [sportsData, setSportsData] = useState([]); // Placeholder for sports data

  const {data: NSELive, isLoading: NSEStatus} = useGetStockDataQuery('^NSEI');
  const {data: BSELive, isLoading: BSEStatus} = useGetStockDataQuery('^BSESN');
  const {data: TopGainers, isLoading: GainersStatus} =
    useGetMarketTrendsQuery('GAINERS');
  const {data: TopLosers, isLoading: LosersStatus} =
    useGetMarketTrendsQuery('LOSERS');

  useEffect(() => {
    if (NSELive && BSELive && TopGainers && TopLosers) {
      // Format the data
      const NSEData = formatStockMarketData(NSELive);
      const BSEData = formatStockMarketData(BSELive);

      const TopThreeGainers = TopGainers?.data?.trends?.slice(0, 3) || [];
      const TopThreeLosers = TopLosers?.data?.trends?.slice(0, 3) || [];
      setTopGainers(TopThreeGainers);
      setTopLosers(TopThreeLosers);

      const stockDataArray = [
        {name: 'NIFTY 50', ...NSEData},
        {name: 'SENSEX', ...BSEData},
      ];

      setStockData(stockDataArray);
    }
  }, [NSELive, BSELive, TopGainers, TopLosers]);

  const renderStockData = data => {
    return data.map((item, index) => {
      return (
        <View key={index} style={styles.stockDataContainer}>
          <View style={styles.stockDataContent}>
            <Text style={styles.stockDataName}>{item.name}</Text>
            <Text style={styles.stockDataPrice}>{item.price}</Text>
          </View>
          <View style={styles.stockDataContent}>
            <Text style={styles.stockDataChange}>{item.change}</Text>

            <View style={styles.stockDataSubContent}>
              <Image
                source={ICONS.HIGH}
                style={[styles.stockDataIcon, {tintColor: 'lightgreen'}]}
              />
              <Text
                style={
                  styles.stockDataChangePercentage
                }>{`(${item.percentageChange}%)`}</Text>
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
            return (
              <View key={index} style={styles.topGainersandLosersContentRow}>
                <Text style={styles.topGainersandLosersName}>{item.name}</Text>
                <View style={styles.topGainersandLosersSubContent}>
                  <Text style={styles.topGainersandLosersChange}>
                    {item.change}
                  </Text>
                  <Image
                    source={title === 'TOP LOSERS' ? ICONS.LOW : ICONS.HIGH}
                    style={[
                      styles.topGainersandLosersIcon,
                      title === 'TOP LOSERS'
                        ? {tintColor: 'lightred'}
                        : {tintColor: 'lightgreen'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.topGainersandLosersPercentageChange,
                      title === 'TOP LOSERS'
                        ? {color: 'lightred'}
                        : {color: 'lightgreen'},
                    ]}>{`(${item.change_percent}%)`}</Text>
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
    <View style={styles.container}>
      {/* Swiper for switching between Stock and Sports banners */}
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        horizontal={false}>
        <Swiper
          horizontal={true}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={false}
          loop={true}>
          <Ticker
            children={renderStockData(stockData)}
            loader={NSEStatus && BSEStatus}
          />
          <Ticker
            children={renderTopGainersandLosers(topGainers, 'TOP GAINERS')}
            loader={GainersStatus}
          />
          <Ticker
            children={renderTopGainersandLosers(topLosers, 'TOP LOSERS')}
            loader={LosersStatus}
          />
        </Swiper>
      </Swiper>
    </View>
  );
};

export default BannerTicker;
