import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import * as RNLocalize from 'react-native-localize'

import en_US from './locales/en_US'
import zh_CN from './locales/zh_CN'
import {Languages} from './constants'

export const resources = {
  [Languages.EN_US]: {
    translation: {
      ...en_US,
    },
  },
  [Languages.ZH_CN]: {
    translation: {
      ...zh_CN,
    },
  },
}
const systemLanguages = RNLocalize.getLocales()?.[0]
const lng = `${systemLanguages.languageCode}_${systemLanguages.countryCode}`

i18next.use(LanguageDetector).init({
  resources,
  lng: lng?.replace('_', '-'),
  fallbackLng: [Languages.ZH_CN, Languages.EN_US],
  interpolation: {
    escapeValue: false, // react 已经保护了 XSS
  },
})

export function t(key) {
  return i18next.t(key)
}

export function changeLanguage(lng) {
  return i18next.changeLanguage(lng)
}