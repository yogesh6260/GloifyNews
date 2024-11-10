import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants';
import {horizontalScale, moderateScale} from '../../../styles/metrics';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const TOS = ({navigation}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerTitle, {color: colors.headerLabel}]}>
          {t('screens.terms_of_service.title')}
        </Text>
      </View>

      {/* Terms of Service Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentContainerHeader}>
          <Text style={styles.title}>
            {t('screens.terms_of_service.subtitle')}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          {/* Section 1: Scope */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              1. {t('screens.terms_of_service.text.section.scope.title')}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.scope.content.point_1',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.scope.content.point_2',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.scope.content.point_3',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.4
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.scope.content.point_4',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.5
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.scope.content.point_5',
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* Section 2: Usage */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              2.{' '}
              {t('screens.terms_of_service.text.section.use_of_the_app.title')}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.use_of_the_app.content.point_1',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.use_of_the_app.content.point_2',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.use_of_the_app.content.point_3',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 3: Content & Reactions  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              3.{' '}
              {t(
                'screens.terms_of_service.text.section.content_and_reactions.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.content_and_reactions.content.point_1',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.content_and_reactions.content.point_2',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.content_and_reactions.content.point_3',
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* Section 4: Acceptable Use Policy  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              4.{' '}
              {t(
                'screens.terms_of_service.text.section.acceptable_use_policy.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <Text
                style={[
                  [styles.sectionBullet, {color: colors.text}],
                  {marginLeft: horizontalScale(10)},
                ]}>
                {t(
                  'screens.terms_of_service.text.section.acceptable_use_policy.subtitle',
                )}
              </Text>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.acceptable_use_policy.content.point_1',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.acceptable_use_policy.content.point_2',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.acceptable_use_policy.content.point_3',
                  )}
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.acceptable_use_policy.content.point_4',
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* Section 5: Privacy Policy  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              5.{' '}
              {t('screens.terms_of_service.text.section.privacy_policy.title')}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.privacy_policy.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 6: Modifications to the Service  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              6.{' '}
              {t(
                'screens.terms_of_service.text.section.modifications_of_the_service.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.modifications_of_the_service.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 7: Termination */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              7. {t('screens.terms_of_service.text.section.termination.title')}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.termination.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 8: Limitation of Liability */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              8.{' '}
              {t(
                'screens.terms_of_service.text.section.limitation_of_liability.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.limitation_of_liability.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 9: Changes to the Terms */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              9.{' '}
              {t(
                'screens.terms_of_service.text.section.changes_to_the_terms.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.changes_to_the_terms.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 10: Governing Law */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              10.{' '}
              {t('screens.terms_of_service.text.section.governing_law.title')}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.governing_law.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
          {/* Section 11: Contact Information */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              11.{' '}
              {t(
                'screens.terms_of_service.text.section.contact_information.title',
              )}
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  {t(
                    'screens.terms_of_service.text.section.contact_information.content.point_1',
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TOS;
