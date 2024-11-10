import {View, Text, Pressable, Image, FlatList} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Pdf from 'react-native-pdf';
import styles from './styles';
import {ICONS} from '../../../constants';
import {horizontalScale, moderateScale} from '../../../styles/metrics';
import {useTheme} from '@react-navigation/native';
import {Loader} from '../../../components/Common';

const MagViewer = ({navigation, route}) => {
  const {title, date, pdfLink} = route.params;
  const {colors} = useTheme();
  const source = {uri: pdfLink, cache: true};
  const pdfRef = useRef();
  const flatListRef = useRef();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const renderThumbnail = ({item}) => (
    <Pressable
      android_ripple={{
        color: 'lightgray',
        borderless: false,
        radius: moderateScale(12),
      }}
      style={[
        styles.thumbnailContainer,
        {
          backgroundColor: colors.bulletinBackground,
          borderColor:
            item + 1 === currentPage
              ? colors.border
              : colors.bulletinBackground,
        },
      ]}
      onPress={() => pdfRef.current.setPage(item + 1)}>
      <Text style={[styles.pageNumber, {color: colors.text}]}>{item + 1}</Text>
    </Pressable>
  );

  useEffect(() => {
    // Scroll to the current page index whenever it changes
    if (flatListRef.current) {
      if (flatListRef.current && totalPages > 0) {
        flatListRef.current.scrollToIndex({
          index: currentPage - 1,
          animated: true,
        });
      }
    }
  }, [currentPage, totalPages]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View
        style={[
          styles.header,
          {backgroundColor: colors.background},
          showMenu ? {} : {opacity: 0},
        ]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          android_ripple={{
            color: 'lightgray',
            borderless: false,
            radius: moderateScale(12),
          }}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText, {color: colors.text}]}>{title}</Text>
          <Text style={[styles.date, {color: colors.text}]}>{date}</Text>
        </View>
      </View>

      <View style={styles.pdfView}>
        <Pdf
          ref={pdfRef}
          source={source}
          horizontal
          enablePaging
          showsHorizontalScrollIndicator={false}
          spacing={0}
          onPageSingleTap={() => setShowMenu(!showMenu)}
          onLoadComplete={numberOfPages => {
            setTotalPages(numberOfPages);
            setLoading(false);
          }}
          onPageChanged={page => setCurrentPage(page)}
          onError={error => console.log(error)}
          onLoadProgress={() => setLoading(true)}
          style={[styles.pdf, {backgroundColor: colors.background}]}
          renderActivityIndicator={() => {
            return <Loader />;
          }}
        />

        {currentPage > 1 && !loading && (
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(50),
            }}
            onPress={() => pdfRef.current.setPage(currentPage - 1)}
            style={[
              styles.absoluteBtn,
              {left: -horizontalScale(20)},
              showMenu ? {} : {opacity: 0},
            ]}>
            <Image source={ICONS.BACK} style={styles.btnIcon} />
          </Pressable>
        )}
        {currentPage !== totalPages && showMenu && !loading && (
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(50),
            }}
            onPress={() => pdfRef.current.setPage(currentPage + 1)}
            style={[
              styles.absoluteBtn,
              {right: -horizontalScale(20)},
              showMenu ? {} : {opacity: 0},
            ]}>
            <Image source={ICONS.RIGHT} style={styles.btnIcon} />
          </Pressable>
        )}
      </View>

      {showMenu && !loading && (
        <View
          style={[styles.thumbnailBar, {backgroundColor: colors.background}]}>
          <FlatList
            ref={flatListRef}
            data={Array.from({length: totalPages}, (_, index) => index)}
            renderItem={renderThumbnail}
            keyExtractor={item => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbnailList}
          />
        </View>
      )}
    </View>
  );
};

export default MagViewer;
