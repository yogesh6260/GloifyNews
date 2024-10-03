import React, {useState, useEffect, useRef, Children} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

// import {useGetStockDataQuery} from '../../../redux/api/Stocks/stockApi';
// import {useGetMarketTrendsQuery} from '../../../redux/api/Stocks/marketGainersLosersApi';

// import {formatStockMarketData} from '../../../utils/helpers'; // Assuming you have these helpers
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
  const [stockData, setStockData] = useState([
    {
      indexName: 'Sensex',
      currentValue: 65120.8,
      change: 450.65,
      percentageChange: 0.7,
    },
    {
      indexName: 'Nifty 50',
      currentValue: 19320.15,
      change: 135.25,
      percentageChange: 0.71,
    },
  ]);
  const [topGainers, setTopGainers] = useState([
    {
      symbol: 'TATAMOTORS',
      price: 665.8,
      change: 18.45,
      percentageChange: 2.85,
    },
    {
      symbol: 'RELIANCE',
      price: 2620.55,
      change: 75.15,
      percentageChange: 2.95,
    },
    {
      symbol: 'HDFC',
      price: 2901.2,
      change: 56.3,
      percentageChange: 1.98,
    },
  ]);
  const [topLosers, setTopLosers] = useState([
    {
      symbol: 'INFY',
      price: 1425.25,
      change: -36.5,
      percentageChange: -2.5,
    },
    {
      symbol: 'WIPRO',
      price: 395.4,
      change: -15.8,
      percentageChange: -3.84,
    },
    {
      symbol: 'ITC',
      price: 432.75,
      change: -9.6,
      percentageChange: -2.17,
    },
  ]);
  const [sportsData, setSportsData] = useState([
    {
      match: 'IRE vs SA - 2nd ODI',
      date: '04 Oct 2024',
      stadium: 'Sheikh Zayed Stadium',
      place: 'Abu Dhabi',
      status: 'Upcoming',
      time: '5:00 PM',
      teamFlag1: 'IRE',
      teamFlag2: 'SA',
    },
    {
      match: 'MUM vs ROI - Irani Cup',
      date: '01 Oct 2024',
      stadium: 'Bharat Ratna Shri Atal Bi...',
      place: 'Lucknow',
      status: 'LIVE',
      results: [
        {
          score: '537',
          bollsLeft: '10',
          overCompleted: '141',
          pointer: false,
        },
        {
          score: '235',
          bollsLeft: '4',
          overCompleted: '62',
          pointer: true,
        },
      ],
      outcome: 'Day 3 - Session 3, Rest of India trail by 302 runs.',
      teamFlag1: 'MUM',
      teamFlag2: 'ROI',
    },
    {
      match: 'IRE vs SA - 1st ODI',
      date: '02 Oct 2024',
      stadium: 'Sheikh Zayed Stadium',
      place: 'Abu Dhabi',
      status: 'Completed',
      results: [
        {
          score: '271',
          bollsLeft: '9',
          overCompleted: '50',
        },
        {
          score: '132',
          bollsLeft: '10',
          overCompleted: '31.5',
        },
      ],
      outcome: 'South Africa won by 139 runs.',
      teamFlag1: 'SA',
      teamFlag2: 'IRE',
    },
    {
      match: 'KSO vs SSS - 12th T20',
      date: '02 Oct 2024',
      stadium: 'Lalabhai Contractor Stadi...',
      place: 'Surat',
      status: 'Completed',
      results: [
        {
          score: '192',
          bollsLeft: '9',
          overCompleted: '20',
        },
        {
          score: '195',
          bollsLeft: '2',
          overCompleted: '16',
        },
      ],
      outcome: 'Southern Super Stars won by 8 wickets',
      teamFlag1: 'KSO',
      teamFlag2: 'SSS',
    },
    {
      match: 'BAN-W vs SC-W - 1s...',
      date: '03 Oct 2024',
      stadium: 'Sharjah Cricket Stadium',
      place: 'Sharjah',
      status: 'LIVE',
      results: [
        {
          score: '55',
          bollsLeft: '1',
          overCompleted: '10',
          pointer: true,
        },
        {
          score: '0',
          bollsLeft: '0',
          overCompleted: '0',
          pointer: false,
        },
      ],
      outcome: 'Bangladesh Women elected to bat',
      teamFlag1: 'BAN-W',
      teamFlag2: 'SC-W',
    },
    {
      match: 'GAW vs SLK - Qualifi...',
      date: '03 Oct 2024',
      stadium: 'Providence Stadium',
      place: 'Guyana',
      status: 'Completed',
      results: [
        {
          score: '198',
          bollsLeft: '5',
          overCompleted: '20',
        },
        {
          score: '106',
          bollsLeft: '4',
          overCompleted: '13',
        },
      ],
      outcome: 'Saint Lucia Kings won by 15 runs (DLS method)',
      teamFlag1: 'SLK',
      teamFlag2: 'GAW',
    },
  ]); // Placeholder for sports data

  // const {data, isLoading, error} = useGetStockDataQuery('^NSEI,^BSESN');

  // const {data: MarketMovers, isLoading: MarketMoversLoading} =
  //   useGetMarketTrendsQuery();

  // useEffect(() => {
  //   if (data && MarketMovers) {
  //     const TopThreeGainers =
  //       MarketMovers?.finance?.result[0]?.quotes?.slice(0, 3) || [];
  //     const TopThreeLosers =
  //       MarketMovers?.finance?.result[1]?.quotes?.slice(0, 3) || [];
  //     // console.log('Market Movers: ', MarketMovers);
  //     // console.log('Top Three Gainers: ', TopThreeGainers);
  //     // console.log('Top Three Losers: ', TopThreeLosers);
  //     setTopGainers(TopThreeGainers);
  //     setTopLosers(TopThreeLosers);

  //     setStockData(data?.quoteResponse?.result);
  //   }
  // }, [data, MarketMovers]);

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
    <View style={styles.container}>
      {/* Swiper for switching between Stock and Sports banners */}
      <Swiper
        autoplay={false}
        // autoplayTimeout={5}
        loop={true}
        horizontal={false}>
        <Swiper
          horizontal={true}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={false}
          loop={true}>
          <Ticker children={renderStockData(stockData)} />
          <Ticker
            children={renderTopGainersandLosers(topGainers, 'TOP GAINERS')}
          />
          <Ticker
            children={renderTopGainersandLosers(topLosers, 'TOP LOSERS')}
          />
        </Swiper>
        <Swiper
          horizontal={true}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={false}
          loop={true}>
          <Ticker children={renderStockData(stockData)} />
          <Ticker
            children={renderTopGainersandLosers(topGainers, 'TOP GAINERS')}
          />
          <Ticker
            children={renderTopGainersandLosers(topLosers, 'TOP LOSERS')}
          />
        </Swiper>
      </Swiper>
    </View>
  );
};

export default BannerTicker;
