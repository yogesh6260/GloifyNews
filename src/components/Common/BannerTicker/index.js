import React, {useState, useEffect, useRef, Children} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import CountryFlag from 'react-native-country-flag';

// import {useGetStockDataQuery} from '../../../redux/api/Stocks/stockApi';
// import {useGetMarketTrendsQuery} from '../../../redux/api/Stocks/marketGainersLosersApi';

// import {formatStockMarketData} from '../../../utils/helpers'; // Assuming you have these helpers
import Ticker from '../Ticker';
import {ICONS, IMAGES} from '../../../constants';

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
      outcome: 'Match starts at 5:00 PM',
      teamFlag1Code: 'IE',
      teamFlag2Code: 'ZA',
      teamFlag1Symbol: 'IRE',
      teamFlag2Symbol: 'SA',
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
      teamFlag1Code: 'IN',
      teamFlag2Code: 'IE',
      teamFlag1Symbol: 'MUM',
      teamFlag2Symbol: 'ROI',
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
      teamFlag1Code: 'ZA',
      teamFlag2Code: 'IE',
      teamFlag1Symbol: 'SA',
      teamFlag2Symbol: 'IRE',
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
      teamFlag1Code: 'IN',
      teamFlag2Code: 'IN',
      teamFlag1Symbol: 'KSO',
      teamFlag2Symbol: 'SSS',
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
      teamFlag1Code: 'BD',
      teamFlag2Code: 'GB',
      teamFlag1Symbol: 'BAN-W',
      teamFlag2Symbol: 'SC-W',
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
      teamFlag1Code: 'LC',
      teamFlag2Code: 'GY',
      teamFlag1Symbol: 'SLK',
      teamFlag2Symbol: 'GAW',
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

  const renderSportsData = item => {
    return (
      <View style={styles.sportDataContainer}>
        <View style={styles.sportHeader}>
          <View style={styles.sportHeaderLeft}>
            <Text
              style={
                styles.matchDetail
              }>{`${item?.match} | ${item?.date}`}</Text>
            <Text
              style={
                styles.placeDetail
              }>{`${item?.stadium} • ${item?.place}`}</Text>
          </View>
          <View style={styles.sportHeaderRight}>
            <Text
              style={[
                styles.matchStatus,
                {
                  backgroundColor:
                    item.status === 'Upcoming'
                      ? 'yellow'
                      : item.status === 'LIVE'
                      ? 'red'
                      : 'green',
                  color: item.status === 'Upcoming' ? 'black' : 'white',
                },
              ]}>
              {item?.status}
            </Text>
          </View>
        </View>
        <View style={styles.sportMiddle}>
          <View>
            <View style={styles.sportFlag}>
              <CountryFlag isoCode={item.teamFlag1Code} size={25} />
              <Text style={styles.flagSymbol}>{item?.teamFlag1Symbol}</Text>
            </View>
            <View>
              {item.status === 'Upcoming' ? null : (
                <Text style={styles.score}>
                  {item?.results[1]?.pointer ? '*' : ''}
                  {`${item?.results[1]?.score}/${item?.results[1]?.bollsLeft} (${item?.results[1]?.overCompleted} ov)`}
                </Text>
              )}
            </View>
          </View>
          <Text style={styles.versus}>VS</Text>
          <View>
            <View style={styles.sportFlag}>
              <CountryFlag isoCode={item.teamFlag2Code} size={25} />
              <Text style={styles.flagSymbol}>{item?.teamFlag2Symbol}</Text>
            </View>
            <View>
              {item.status === 'Upcoming' ? null : (
                <Text style={styles.score}>
                  {item?.results[1]?.pointer ? '*' : ''}
                  {`${item?.results[1]?.score}/${item?.results[1]?.bollsLeft} (${item?.results[1]?.overCompleted} ov)`}
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.sportFooter}>
          <Text style={styles.sportFooterText}>{item?.outcome}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Swiper for switching between Stock and Sports banners */}
      <Swiper
        loop={true}
        horizontal={false}
        autoplay={true}
        autoplayTimeout={12}
        showsPagination={true}
        paginationStyle={{top: 0, right: 50, position: 'absolute'}}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        <Swiper
          horizontal={true}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={true}
          loop={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
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
        <Swiper
          horizontal={true}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          loop={true}>
          {sportsData.map((item, index) => {
            return (
              <Ticker
                children={renderSportsData(item)}
                key={index}
                poweredBy={'Sports Keeda'}
                background={IMAGES.SPORTS_BANNER_BG}
              />
            );
          })}
        </Swiper>
      </Swiper>
    </View>
  );
};

export default BannerTicker;
