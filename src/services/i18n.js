import * as RNLocalize from 'react-native-localize';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import {
  I18nManager
} from 'react-native';
import moment from 'moment';
import 'moment/min/locales';
import en from '../locales/en';

i18n.defaultLocale = 'en';

i18n.translations = {
  en
};

export const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { 
    languageTag: 'en', 
    isRTL: false 
  };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
    fallback;

  // clear translation cache
  t.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config & update moment locale
  i18n.locale = languageTag;
  moment.locale(languageTag);
};