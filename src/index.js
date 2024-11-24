import i18next from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import en_US_common from './locales/en_US/common/common.json'
import en_US_portal from './locales/en_US/portal/portal.json'

import zh_CN_common from './locales/zh_CN/common/common.json'
import zh_CN_portal from './locales/zh_CN/portal/portal.json'
import {Languages} from './constants.js'

const resources = {}
resources[Languages.EN_US] = {
  translation: {
    common: en_US_common,
    portal: en_US_portal,
  }
}

resources[Languages.ZH_CN] = {
  translation: {
    common: zh_CN_common,
    portal: zh_CN_portal,
  }
}

i18next.use(LanguageDetector).init({
  resources,
  lng: Languages.ZH_CN,
  fallbackLng: [Languages.ZH_CN, Languages.EN_US],
  interpolation: {
    escapeValue: false, // react 已经保护了 XSS
  },
}, (err, t) => {
  if (err) return console.log('something went wrong loading', err)
  console.log('Successfully.', t('common.welcome'))
})

export function t(key) {
  return i18next.t(key)
}

export function setLanguage(lng) {
  return i18next.changeLanguage(lng, (err, t) => {
    if (err) return console.error(`Fail to language: ${lng}`, err)
    console.log('current language:', lng)
  })
}