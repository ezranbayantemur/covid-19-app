import React from 'react'
import { View, TouchableOpacity, TextInput, Image } from 'react-native'

import styles from '../utils/styles'

const SearchBar = props => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={styles.searchBar.icon.image}
                    source={require('../assets/logo.png')}
                />
            </View>

            <View style={styles.searchBar.container}>
                <TextInput
                    style={styles.searchBar.inputStyle}
                    placeholder={props.label}
                    placeholderTextColor={styles.searchBar.placeholderColor}
                    onChangeText={props.onSearch}
                />
                <Image source={require('../assets/search.png')} style={styles.searchBar.logo} />
            </View>

            <TouchableOpacity style={{ paddingHorizontal: 3, justifyContent: 'center' }} onPress={props.changeLang}>
                <Image source={require('../assets/globe.png')} style={styles.searchBar.langImage} />
            </TouchableOpacity>
        </View>
    )
}

export { SearchBar }