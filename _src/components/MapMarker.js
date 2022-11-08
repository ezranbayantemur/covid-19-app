import React from 'react'
import numeral from 'numeral'
import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps'

import styles from '../utils/styles'

const MapMarker = ({ data }) => {
    return (
        <Marker
            coordinate={data.coordinates}
            tracksViewChanges={false}
            anchor={{ x: 0.5, y: -0.5 }}
        >
            <View style={styles.map.marker.container}>
                <Text style={styles.map.marker.title}>{numeral(data.cases.active).format('0,0')}</Text>
            </View>
        </Marker>
    )
}

export { MapMarker }