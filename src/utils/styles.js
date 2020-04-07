import { Dimensions, Platform, Appearance } from 'react-native'

const
    deviceSize = Dimensions.get('window'),
    theme = Appearance.getColorScheme()

const
    lightMap = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7a7a7a"
                },
                {
                    "weight": 1
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ],
    darkMap = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7a7a7a"
                },
                {
                    "weight": 1
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ]

let segmentColor, markerColor, loadingTheme, mapStyle, fontColor, surfaceColor, seperatorColor, searchBackColor, placeholderColor

if (theme === "light") {
    markerColor = 'rgb(242, 63, 52)'
    loadingTheme = { backgroundColor: "#E1E9EE", highlightColor: "#F2F8FC" }
    mapStyle = lightMap
    fontColor = "black"
    surfaceColor = "white"
    seperatorColor = "#eceff1"
    searchBackColor = "#eceff1"
    placeholderColor = "gray"
    segmentColor = "#eceff1"
}
else {
    markerColor = 'red'
    loadingTheme = { backgroundColor: "#263238", highlightColor: "#37474f" }
    mapStyle = darkMap
    fontColor = "#eceff1"
    surfaceColor = "#121212"
    seperatorColor = "#29434e"
    searchBackColor = "#37474f"
    placeholderColor = "#9ea7aa"
    segmentColor = '#263238'
}

const styles = {
    loadingTheme,
    segmentColor,
    mainContainer: {
        flex: 1,
        backgroundColor: surfaceColor
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        icon: {
            image: {
                margin: 5,
                width: deviceSize.width * 0.1,
                height: deviceSize.width * 0.1,
                tintColor: 'rgb(242, 63, 52)'
            },
            text: {
                marginHorizontal: 5,
                fontSize: 25,
            }
        },
        container: Platform.OS === "ios" ?
            {
                alignSelf: 'center',
                height: 30,
                flex: 1,
                margin: 5,
                padding: 5,
                borderRadius: 5,
                backgroundColor: searchBackColor,
                flexDirection: 'row'
            }
            :
            {
                alignSelf: 'center',
                height: 30,
                flex: 1,
                margin: 5,
                paddingHorizontal: 5,
                borderRadius: 5,
                backgroundColor: searchBackColor,
                flexDirection: 'row'
            },

        placeholderColor,

        inputStyle: {
            flex: 1,
            padding: 0,
            color: fontColor
        },
        logo: {
            width: deviceSize.width * 0.04,
            height: deviceSize.height * 0.03,
            resizeMode: 'contain',
            tintColor: placeholderColor
        },
        langImage: {
            width: deviceSize.width * 0.07,
            height: deviceSize.height * 0.05,
            resizeMode: 'contain',
            tintColor: 'rgb(242, 63, 52)',
        }
    },
    main: {
        loading: {
            topContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10
            },
            topLeft: {
                width: deviceSize.width * 0.3,
                height: 20,
                borderRadius: 10
            },
            bottom: {
                alignSelf: 'center',
                borderRadius: 10,
                width: deviceSize.width * 0.9,
                height: 20,
            }
        },
        seperator: {
            borderColor: seperatorColor,
            borderWidth: 1
        },
        sortTitle: {
            fontSize: 15,
            marginLeft: 3,
            color: fontColor
        },
        header: {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomColor: seperatorColor,
            borderBottomWidth: 1,
            paddingVertical: 3
        },
        noResult: {
            image: {
                width: deviceSize.width * 0.1,
                height: deviceSize.height * 0.1,
                resizeMode: 'contain',
                tintColor: 'gray'
            },
            title: {
                color: 'gray',
                textAlign: 'center'
            }
        },
        sort: {
            image: {
                width: deviceSize.width * 0.05,
                height: deviceSize.height * 0.05,
                resizeMode: 'contain',
            },
            title: {
                fontSize: 11,
                marginLeft: 3,
            }
        }
    },
    dataItem: {
        container: {
            padding: 10,
        },
        topContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
        },
        countryName: {
            fontSize: 20,
            color: fontColor,
        },
        totalConf: {
            fontSize: 18,
            color: fontColor

        },
        valueNum: {
            marginLeft: 5,
            fontSize: 12,
            color: fontColor
        },
        valueNumInfo: {
            fontSize: 10,
            fontStyle: 'italic',
            marginLeft: 5
        },
        valueColor: {
            width: 10,
            height: 10,
            borderRadius: 20
        },
        valueContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        values: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5
        },
        region: {
            marginLeft: 2,
            fontSize: 10,
            fontStyle: 'italic',
            color: fontColor
        },
        updateTime: {
            fontSize: 10,
            marginLeft: 5,
            color: 'gray'
        }
    },
    detail: {
        loading: {
            headerRight: {
                height: 15,
                width: deviceSize.width * 0.2,
                borderRadius: 5

            },
            headerLeft: {
                height: 30,
                width: deviceSize.width * 0.3,
                borderRadius: 5

            },
            graph: {
                padding: 5,
                borderLeftWidth: 1,
                borderBottomWidth: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                borderColor: '#E1E9EE',
                justifyContent: 'space-around',
            },
            legend: {
                marginTop: 5,
                height: 15,
                width: deviceSize.width * 0.9,
                alignSelf: 'center',
                borderRadius: 5
            },
            listTop: {
                marginVertical: 5,
                borderRadius: 5,
                height: 15,
                width: deviceSize.width * 0.3,
            },
            listBottom: {
                marginVertical: 5,
                borderRadius: 5,
                height: 15,
                width: deviceSize.width * 0.8,
            }
        },
        container: {
            flex: 1,
            padding: 5
        },
        graphStyle: {
            borderColor: 'gray',
            borderBottomWidth: 1,
            height: deviceSize.height * 0.35
        },
        listHeader: {
            color: fontColor,
            fontWeight: 'bold',
            fontSize: 25,
            margin: 5
        },
        listItem: {
            date: {
                fontWeight: 'bold',
                fontSize: 12,
                color: fontColor,
            },
            label: {
                color: fontColor,
                fontWeight: 'bold',
                fontSize: 12
            },
            value: {
                color: fontColor,
                fontWeight: 'normal',
                fontSize: 12
            }
        },
        legend: {
            container: {
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#e0e0e0',
                paddingVertical: 5
            },
            subContainer: {
                flexDirection: 'row',
                alignItems: 'center'
            },
            itemIcon: {
                width: 10,
                height: 10,
                borderRadius: 20,
            },
            itemTitle: {
                color: fontColor,
                fontWeight: 'bold',
                marginLeft: 5,
                fontSize: 10
            }
        },
        listStyle: {
            height: deviceSize.height * 0.75
        },
        header: {
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
            title: {
                color: fontColor,
                fontSize: 50,
                fontWeight: 'bold'
            },
            count: {
                color: fontColor,
                fontSize: 25,
                fontWeight: 'bold'
            }
        }
    },
    map: {
        mapStyle,
        marker: {
            container: {
                padding: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#bdbdbd',
                backgroundColor: markerColor
            },
            title: {
                color: 'white',
                fontSize: 10,
                fontWeight: 'bold'
            }
        }
    },
    pie: {
        chartStyle: {
            margin: 5,
            height: deviceSize.height * 0.05,
            width: deviceSize.width * 0.1,
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        pieData: {
            fontSize: 11,
            color: '#e53935',
            fontWeight: 'bold',
        },
        dataContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3
        }
    }
}


export default styles