import { createContext } from 'react'
import moment from 'moment'
import tr from '../../languages/tr.json'
import en from '../../languages/en.json'
import { NativeModules, Platform } from 'react-native'

require('moment/locale/tr.js')
require('moment/locale/uk.js')

function getNativeLanguage() {
    let lang = Platform.OS === "android" ? NativeModules.I18nManager.localeIdentifier : NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    switch (lang.slice(0, 2)) {
        case "tr":
            {
                moment.locale("tr")
                return tr
            }
        case "en":
            {
                moment.locale("en")
                return en
            }
        default:
            return en;
    }
}

export const initalState = {
    language: getNativeLanguage(),
    mapData: []
}


const Context = createContext(initalState)

export default Context 