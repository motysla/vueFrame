import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const LANG_DEFAULT = 'zh'
const KEY_LOCALE = 'locale_language_key'
const LANG_MESSAGES = {
  zh: require('../common/locales/zh-CN.json'),
  en: require('../common/locales/en-US.json'),
  jp: require('../common/locales/ja-JP.json')
}

const i18n = new VueI18n({
  locale: LANG_DEFAULT,
  messages: LANG_MESSAGES,
  fallbackLocale: LANG_DEFAULT
})

export const setupLangLocal = lang => {
  if (lang == Vue.config.lang) return
  let langLocal = window.localStorage.getItem(KEY_LOCALE) || LANG_MESSAGES
  if (lang && LANG_MESSAGES[lang]) {
    langLocal = lang
  }
  window.localStorage.setItem(KEY_LOCALE, langLocal)
  Object.keys(LANG_MESSAGES).forEach(item => {
    document.body.classList.remove(`lang-${item}`)
  })
  document.body.classList.add(`lang-${langLocal}`)
  document.body.setAttribute('lang', langLocal)
  Vue.config.lang = langLocal
  i18n.locale = langLocal
}

setupLangLocal('zh')
export default i18n
