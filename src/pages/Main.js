import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import styles from '../utils/styles'
import { createList } from '../utils/functions'
import { SearchBar, DataItem } from '../components'

export default Main = props => {
  const
    [loading, setLoading] = useState(true),
    [dataList, setDataList] = useState([]),
    [originalList, setOriginalList] = useState([])

  const fetchData = async () => {
    setLoading(true)

    let statusList = await createList()

    setOriginalList(statusList)
    setDataList(statusList[0])
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  searchByName = text => {
    let filteredList = originalList[0].filter(item => {
      const itemData = item.country.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })

    setDataList(filteredList)
  }

  renderListHeader = () => {
    return (
      <View style={styles.main.header}>
        <Text style={styles.main.sortTitle}>Sırala:</Text>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[1].reverse()])}>
          <Image source={require('../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'orange' }]} />
          <Text style={[styles.main.sort.title, { color: 'orange' }]}>Vaka/Nüfus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[2].reverse()])}>
          <Image source={require('../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'red' }]} />
          <Text style={[styles.main.sort.title, { color: 'red' }]}>Ölüm/Vaka</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => setDataList([...originalList[3].reverse()])}>
          <Image source={require('../assets/sort.png')} style={[styles.main.sort.image, { tintColor: 'green' }]} />
          <Text style={[styles.main.sort.title, { color: 'green' }]}>İyileşme/Vaka</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderCountries = ({ item }) => <DataItem item={item} />

  renderSeperator = () => <View style={styles.main.seperator} />

  renderEmpty = () => {
    return (
      loading ?
        <View style={{ flex: 1 }} />
        :
        <View style={styles.center}>
          <Image source={require('../assets/search.png')} style={styles.main.noResult.image} />
          <Text style={styles.main.noResult.title}>{`Aramanıza uygun sonuç yok\nYa da ne mutlu ki o ülkede vaka yok.`}</Text>
        </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SearchBar onSearch={searchByName} />
      <FlatList
        data={dataList}
        refreshing={loading}
        onRefresh={fetchData}
        renderItem={renderCountries}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={{ flexGrow: 1 }}
        ItemSeparatorComponent={renderSeperator}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

// #evdekal