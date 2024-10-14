import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hi from './hi.json';
import ta from './ta.json';
import bn from './bn.json';
import gu from './gu.json';
import mr from './mr.json';
import kn from './kn.json';
import ur from './ur.json';
import pa from './pa.json';
import te from './te.json';
import or from './or.json';
import as from './as.json';
import ml from './ml.json';

const resources = {
  en: {translation: en},
  hi: {translation: hi},
  ta: {translation: ta},
  bn: {translation: bn},
  gu: {translation: gu},
  mr: {translation: mr},
  kn: {translation: kn},
  ur: {translation: ur},
  pa: {translation: pa},
  te: {translation: te},
  or: {translation: or},
  as: {translation: as},
  ml: {translation: ml},
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
