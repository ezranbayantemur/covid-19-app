import React from 'react'
import { View, TextInput, Image } from 'react-native'

import styles from '../utils/styles'

const SearchBar = props => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.searchBar.container}>
                <TextInput
                    style={styles.searchBar.inputStyle}
                    placeholder="Ara.."
                    placeholderTextColor={styles.searchBar.placeholderColor}
                    onChangeText={props.onSearch}
                />
                <Image source={require('../assets/search.png')} style={styles.searchBar.logo} />
            </View>
        </View>
    )
}

export { SearchBar }