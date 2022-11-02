import React from 'react'
import { View, Text } from 'react-native'
import styles from '../utils/styles'

const GraphLegend = props => {
    return (
        <View style={styles.detail.legend.container}>
            <View style={styles.detail.legend.subContainer}>
                <View style={[styles.detail.legend.itemIcon, { backgroundColor: '#ffa000' }]} />
                <Text style={styles.detail.legend.itemTitle}>{props.labels[0]}</Text>
            </View>
            <View style={styles.detail.legend.subContainer}>
                <View style={[styles.detail.legend.itemIcon, { backgroundColor: '#43a047' }]} />
                <Text style={styles.detail.legend.itemTitle}>{props.labels[1]}</Text>
            </View>
            <View style={styles.detail.legend.subContainer}>
                <View style={[styles.detail.legend.itemIcon, { backgroundColor: '#e53935' }]} />
                <Text style={styles.detail.legend.itemTitle}>{props.labels[2]}</Text>
            </View>
        </View>
    )
}

export { GraphLegend }