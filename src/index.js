import i18next from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import en_US_common from './locales/en_US/common/common.json'
import en_US_portal from './locales/en_US/portal/portal.json'
import en_US_agent from './locales/en_US/agent/agent.json'

import zh_CN_common from './locales/zh_CN/common/common.json'
import zh_CN_portal from './locales/zh_CN/portal/portal.json'
import zh_CN_agent from './locales/zh_CN/agent/agent.json'
import {Languages} from './constants.js'

const resources = {}
resources[Languages.EN_US] = {
  translation: {
    common: en_US_common,
    portal: en_US_portal,
    agent: en_US_agent,
  }
}

resources[Languages.ZH_CN] = {
  translation: {
    common: zh_CN_common,
    portal: zh_CN_portal,
    agent: zh_CN_agent,
  }
}

i18next.use(LanguageDetector).init({
  resources,
  detection: {
    // 优先检测返回的语言缓存顺序
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  },
  fallbackLng: Languages.EN_US,
  interpolation: {
    escapeValue: false, // react 已经保护了 XSS
  },
}, (err, t) => {
  if (err) return console.log('something went wrong loading', err)
  console.log(t('common.welcome'))
}).then(r => console.log('Successfully.', r))

export function t(key) {
  return i18next.t(key)
}

export function getCurrentLanguage() {
  return i18next.language
}

export function getSupportedLanguage() {
  return [Languages.ZH_CN, Languages.EN_US]
}

export function setLanguage(lng) {
  const currentLang = i18next.language
  if (currentLang === lng) {
    console.log('Language is already set to:', lng)
    return
  }

  return i18next.changeLanguage(lng, (err, t) => {
    if (err) return console.error(`Fail to change language: ${lng}`, err)
    console.log('current language:', lng)
    localStorage.setItem('i18nextLng', lng) // 手动缓存语言到localStorage
  })
}