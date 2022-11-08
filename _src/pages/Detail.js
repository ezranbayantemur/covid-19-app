import moment from 'moment'
import numeral from 'numeral'
import * as shape from 'd3-shape'
import React, { useState, useEffect, useContext } from 'react'
import { StackedAreaChart, PieChart } from 'react-native-svg-charts'
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native'
require('moment/locale/tr.js')

import styles from '../utils/styles'
import { GraphLegend } from '../components'
import Context from '../context/components/store'
import { DetailLoader } from '../components/Loader'
import { createDetailData } from '../utils/functions'

const Detail = props => {
    const
        { data } = props.route.params,
        selectedData = JSON.parse(data)

    const
        { state, dispatch } = useContext(Context),
        [loading, setLoading] = useState(false),
        [detailData, setData] = useState([])


    const fetchData = async () => {
        setLoading(true)
        let statusList = await createDetailData(selectedData)
        setData(statusList)
        setLoading(false)
    }

    useEffect(() => { fetchData() }, [])

    const renderListItem = ({ item }) => {
        return (
            <View style={{ padding: 5 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'rgb(242, 63, 52)', width: 8, height: 8, borderRadius: 8, margin: 5, marginLeft: 0 }} />
                    <Text style={styles.detail.listItem.date}>{moment(item.time).format('dddd DD/MM (hh:mm)')}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.detail.listItem.label}>{state.language.detail.total}: <Text style={styles.detail.listItem.value}>{numeral(item.total).format('0,0')}</Text></Text>
                    <Text style={styles.detail.listItem.label}>{state.language.detail.rec}: <Text style={styles.detail.listItem.value}>{numeral(item.recovered).format('0,0')}</Text></Text>
                    <Text style={styles.detail.listItem.label}>{state.language.detail.death}: <Text style={styles.detail.listItem.value}>{numeral(item.death).format('0,0')}</Text></Text>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {
                JSON.stringify(detailData) != 0 ?
                    <ScrollView style={{ paddingTop: 10 }}>
                        <View style={styles.detail.container}>

                            {
                                loading ?
                                    <DetailLoader />
                                    :
                                    <>
                                        <View style={styles.detail.header.container}>
                                            <Text style={styles.detail.header.title}>{selectedData.country}</Text>
                                            <Text style={styles.detail.header.count}>{numeral(selectedData.cases.total).format('0,0')}</Text>
                                        </View>

                                        <StackedAreaChart

                                            style={styles.detail.graphStyle}
                                            data={detailData}
                                            keys={['recovered', 'death', 'total']}
                                            colors={['#e53935', '#43a047', '#ffa000']}
                                            curve={shape.curveNatural}
                                            showGrid={true}
                                        />

                                        <GraphLegend labels={state.language.detail.legend} />

                                        <View style={styles.pie.container}>

                                            <View style={styles.pie.dataContainer}>
                                                <PieChart
                                                    innerRadius="75%"
                                                    style={styles.pie.chartStyle}
                                                    data={[{ value: selectedData.cases.recovered, svg: { fill: '#43a047' }, key: 'rec' }, { value: selectedData.deaths.total, svg: { fill: '#e53935' }, key: 'dth' }]}
                                                />


                                                <View>
                                                    <Text style={[styles.pie.pieData, { color: '#43a047', marginBottom: 5 }]} >{state.language.detail.chart1[0]}: <Text style={{ fontWeight: 'normal' }} >{numeral(selectedData.cases.recovered).format('0,0')}</Text></Text>
                                                    <Text style={[styles.pie.pieData, { color: '#e53935' }]} >{state.language.detail.chart1[1]}: <Text style={{ fontWeight: 'normal' }} >{numeral(selectedData.deaths.total).format('0,0')}</Text></Text>
                                                </View>
                                            </View>

                                            {
                                                selectedData.tests.total ?
                                                    <View style={styles.pie.dataContainer}>
                                                        <PieChart
                                                            innerRadius="75%"
                                                            style={styles.pie.chartStyle}
                                                            data={[{ value: selectedData.tests.total, svg: { fill: '#2196f3' }, key: 'tst' }, { value: selectedData.cases.total, svg: { fill: '#ffa000' }, key: 'ttl' }]}
                                                        />
                                                        <View>
                                                            <Text style={[styles.pie.pieData, { color: '#ffa000', marginBottom: 5 }]}>{state.language.detail.chart2[0]}: <Text style={{ fontWeight: 'normal' }} >{numeral(selectedData.cases.total).format('0,0')}</Text></Text>
                                                            <Text style={[styles.pie.pieData, { color: '#2196f3', marginBottom: 5 }]}>{state.language.detail.chart2[1]}: <Text style={{ fontWeight: 'normal' }} >{numeral(selectedData.tests.total).format('0,0')}</Text></Text>
                                                        </View>
                                                    </View>
                                                    :
                                                    <Text style={{ fontWeight: 'bold', color: '#2196f3', fontSize: 13, }}>{state.language.detail.noTest}</Text>
                                            }

                                        </View>

                                        <View style={styles.detail.listStyle}>
                                            <FlatList
                                                keyExtractor={(i, index) => index.toString()}
                                                data={detailData}
                                                renderItem={renderListItem}
                                                ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />}
                                                ListHeaderComponent={() => {
                                                    return (
                                                        <View style={{ borderBottomWidth: 2, borderColor: 'white' }}>
                                                            <Text style={styles.detail.listHeader}>{state.language.detail.daily}</Text>
                                                        </View>
                                                    )
                                                }
                                                }
                                            />
                                        </View>
                                    </>
                            }

                        </View>
                    </ScrollView>
                    : null
            }
        </SafeAreaView >
    )
}

export { Detail }