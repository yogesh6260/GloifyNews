import {View, Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {sportsData} from '../../../data/LiveTickerData';
import CountryFlag from 'react-native-country-flag';
import Ticker from '../Ticker';
import {IMAGES} from '../../../constants';

const SportsBanner = ({
  scrollEnabled = true,
  autoPlay = true,
  autoPlayTimeout = 2,
  loop = true,
}) => {
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
    <Swiper
      horizontal={true}
      autoplay={autoPlay}
      autoplayTimeout={autoPlayTimeout}
      showsPagination={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      loop={loop}
      scrollEnabled={scrollEnabled}>
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
  );
};

export default SportsBanner;
