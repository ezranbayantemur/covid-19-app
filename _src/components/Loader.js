import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import styles from '../utils/styles'

export const MainLoader = () => {
    return (
        [...Array(10)].map((_, i) => {
            return (
                <SkeletonPlaceholder {...styles.loadingTheme} key={i}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#eceff1', paddingVertical: 10 }}>
                        <View style={styles.main.loading.topContainer}>
                            <View style={styles.main.loading.topLeft} />
                            <View style={styles.main.loading.topLeft} />
                        </View>
                        <View style={styles.main.loading.bottom} />
                    </View>
                </SkeletonPlaceholder>
            )
        })
    )
}

export const DetailLoader = () => {
    return (
        <SkeletonPlaceholder {...styles.loadingTheme}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}>
                <View style={styles.detail.loading.headerLeft} />
                <View style={styles.detail.loading.headerRight} />
            </View>
            <View style={styles.detail.loading.graph}>
                {[140, 120, 180, 140, 160, 150, 120].map(h => <View style={{ width: 50, height: h }} />)}
            </View>
            <View style={styles.detail.loading.legend} />

            {[...Array(8)].map((_, i) => {
                return (
                    <View key={i} style={{ padding: 5 }}>
                        <View style={styles.detail.loading.listTop} />
                        <View style={styles.detail.loading.listBottom} />
                    </View>
                )
            })}
        </SkeletonPlaceholder>
    )
}