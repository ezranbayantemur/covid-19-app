import moment from 'moment'
import tr from '../../languages/tr.json'
import en from '../../languages/en.json'

require('moment/locale/tr.js')
require('moment/locale/uk.js')

export function reducers(state, action) {
    switch (action.type) {
        case "SET_DATA":
            state.mapData = action.mapData
            return { ...state }


        case "CHANGE_LANG": {
            if (action.selectedLang === 'tr') {
                moment.locale("tr")
                return {
                    ...state,
                    language: tr
                }
            }
            else if (action.selectedLang === 'en') {
                moment.locale("en")
                return {
                    ...state,
                    language: en
                }
            }
        }

        default:
            return state
    }
}