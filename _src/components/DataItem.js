import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { TouchableOpacity, View, Text } from 'react-native'
require('moment/locale/tr.js')

import styles from '../utils/styles'

export const DataItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.dataItem.container} onPress={onPress}>
            <View style={styles.dataItem.topContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.dataItem.countryName}>{item.country.trim()}</Text>
                    <Text style={styles.dataItem.region}>{item.region}</Text>
                    <Text style={styles.dataItem.updateTime}>{moment(item.updateTime).fromNow()}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dataItem.totalConf}>{numeral(item.cases.total).format('0,0')}</Text>
                    {item.deaths.new ? <Text style={[styles.dataItem.valueNumInfo, { color: 'red', fontStyle: 'normal' }]}>({item.deaths.new})</Text> : null}
                </View>
            </View>
            <View style={styles.dataItem.values}>

                <View style={[styles.dataItem.valueContainer, { justifyContent: 'flex-start' }]}>
                    <View style={[styles.dataItem.valueColor, { backgroundColor: 'orange' }]} />
                    <Text style={styles.dataItem.valueNum}>{numeral(item.cases.total).format('0,0')}</Text>
                    <Text style={[styles.dataItem.valueNumInfo, { color: 'orange' }]}>(%{item.PercentConfirmed.toFixed(5)})</Text>
                </View>

                <View style={[styles.dataItem.valueContainer, { flexDirection: 'row' }]}>
                    <View style={[styles.dataItem.valueColor, { backgroundColor: 'red' }]} />
                    <Text style={styles.dataItem.valueNum}>{numeral(item.deaths.total).format('0,0')}</Text>
                    <Text style={[styles.dataItem.valueNumInfo, { color: 'red' }]}>(%{item.PercentDeath.toFixed(2)})</Text>
                </View>

                <View style={styles.dataItem.valueContainer}>
                    <View style={[styles.dataItem.valueColor, { backgroundColor: 'green' }]} />
                    <Text style={styles.dataItem.valueNum}>{numeral(item.cases.recovered).format('0,0')}</Text>
                    <Text style={[styles.dataItem.valueNumInfo, { color: 'green' }]}>(%{item.PercentRecovered.toFixed(2)})</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
