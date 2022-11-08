import numeral from 'numeral'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import styles from '../utils/styles'
import Context from '../context/components/store'
import { MapMarker } from '../components'

const WorldMap = props => {
    const
        { state, dispatch } = useContext(Context),
        [markerList, setMarkers] = useState([])

    renderMarkers = (c, i) => <MapMarker key={i} data={c} />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                customMapStyle={styles.map.mapStyle}
                onMapReady={() => setMarkers([...state.mapData])}
                mapType="standard"
                provider="google"
                style={{ flex: 1 }}
            >

                {
                    markerList.length != 0 ?
                        markerList.map(renderMarkers) : null
                }

            </MapView>
        </SafeAreaView>
    )
}

export { WorldMap }
