import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants';
import {horizontalScale} from '../../../styles/metrics';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const TOS = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerTitle, {color: colors.headerLabel}]}>
          Terms of Service
        </Text>
      </View>

      {/* Terms of Service Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.contentContainerHeader}>
          <Text style={styles.title}>Terms & Conditions for GloifyNews</Text>
        </View>
        <View style={styles.sectionContainer}>
          {/* Section 1: Scope */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              1. SCOPE
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  GloifyNews is a web-based portal and mobile application
                  ("Platform") provided by Gloify. Your use of the Platform is
                  subject to these Terms and Conditions ("Terms").
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Welcome to GloifyNews! These Terms of Service ("Terms") govern
                  your use of GloifyNews (the "App" or "Service"), provided by
                  Gloify ("we," "our," or "us"). By accessing or using
                  GloifyNews, you agree to these Terms. If you do not agree with
                  these Terms, please do not use the App.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  GloifyNews aggregates news articles from multiple trusted
                  sources, providing users with access to the latest news and
                  trending stories across various categories such as politics,
                  sports, technology, entertainment, and more.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.4
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Users can personalize their news feed, react to articles, save
                  favorites, and adjust settings to optimize their reading
                  experience according to their preferences.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  1.5
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  GloifyNews delivers notifications for breaking news, allowing
                  users to stay informed in real-time about significant events
                  as they unfold.
                </Text>
              </View>
            </View>
          </View>

          {/* Section 2: Usage */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              2. Use of the App
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  You must be at least 13 years old to use GloifyNews. By using
                  this Service, you confirm that you meet this age requirement.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Some features of GloifyNews may require you to register for an
                  account. You are responsible for safeguarding your account
                  credentials and for all activities that occur under your
                  account.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  2.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  We grant you a limited, non-exclusive, non-transferable
                  license to access and use the App for personal, non-commercial
                  purposes, subject to these Terms.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 3: Content & Reactions  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              3. Content and Reactions
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.1
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  GloifyNews provides access to news articles and content
                  sourced from third-party providers. We are not responsible for
                  the accuracy, completeness, or quality of this content.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.2
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  You may react to news articles with preset reaction options
                  provided by GloifyNews. Reactions must comply with our
                  Acceptable Use Policy (see Section 3). GloifyNews reserves the
                  right to remove or modify reactions at our discretion.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  3.3
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  You retain ownership of any content (reactions, comments,
                  settings) you submit to GloifyNews, but grant us a worldwide,
                  royalty-free, perpetual, irrevocable license to use, modify,
                  display, and distribute this content for the purpose of
                  operating and improving our services.
                </Text>
              </View>
            </View>
          </View>

          {/* Section 4: Acceptable Use Policy  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              4. Acceptable Use Policy
            </Text>
            <View style={styles.sectionContentWrapper}>
              <Text
                style={[
                  [styles.sectionBullet, {color: colors.text}],
                  {marginLeft: horizontalScale(10)},
                ]}>
                You agree not to:
              </Text>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Post, react, or engage with content that is unlawful, harmful,
                  abusive, threatening, or otherwise objectionable.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Use automated systems (e.g., bots) to interact with the App.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Impersonate others or provide inaccurate information.
                </Text>
              </View>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Use GloifyNews in a way that violates any laws or regulations.
                </Text>
              </View>
            </View>
          </View>

          {/* Section 5: Privacy Policy  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              5. Privacy Policy
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  Our Privacy Policy [link to Privacy Policy] describes how we
                  collect, use, and share your personal information. By using
                  the App, you agree to the terms of the Privacy Policy.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 6: Modifications to the Service  */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              6. Modifications to the Service
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  We may update, change, or discontinue any aspect of GloifyNews
                  at any time. We are not liable for any modifications or the
                  removal of features and functions.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 7: Termination */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              7. Termination
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  We may suspend or terminate your account or access to
                  GloifyNews if we believe you are violating these Terms or
                  engaging in any prohibited activity. Termination does not
                  limit any of our other rights or remedies.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 8: Limitation of Liability */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              8. Limitation of Liability
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  GloifyNews and its providers are not liable for any indirect,
                  incidental, or consequential damages arising from your use of
                  the App. We make no warranty that the App will be
                  uninterrupted, secure, or error-free.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 9: Changes to the Terms */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              9. Changes to the Terms
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  We may revise these Terms at any time. If we make significant
                  changes, we will notify you via the App or by other means.
                  Continued use of GloifyNews after such changes constitutes
                  acceptance of the new Terms.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 10: Governing Law */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              10. Governing Law
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  These Terms are governed by and construed in accordance with
                  the laws of GloifyNews. You agree to submit to the exclusive
                  jurisdiction of the courts in High Court.
                </Text>
              </View>
            </View>
          </View>
          {/* Section 11: Contact Information */}
          <View style={styles.section}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              11. Contact Information
            </Text>
            <View style={styles.sectionContentWrapper}>
              <View style={styles.sectionContent}>
                <Text style={[styles.sectionBullet, {color: colors.text}]}>
                  •
                </Text>
                <Text style={[styles.sectionText, {color: colors.text}]}>
                  If you have any questions or concerns about these Terms,
                  please contact us at contact@gloify.com.
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
