import { Dimensions, Platform, Appearance } from 'react-native'

const
    deviceSize = Dimensions.get('window'),
    theme = Appearance.getColorScheme()

let fontColor, surfaceColor, seperatorColor, searchBackColor, placeholderColor

if (theme === "light") {
    fontColor = "black"
    surfaceColor = "white"
    seperatorColor = "#eceff1"
    searchBackColor = "#eceff1"
    placeholderColor = "gray"
}
else {
    fontColor = "white"
    surfaceColor = "#121212"
    seperatorColor = "#29434e"
    searchBackColor = "#37474f"
    placeholderColor = "#9ea7aa"
}

const styles = {
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
        container: Platform.OS === "ios" ?
            {
                flex: 1,
                margin: 5,
                padding: 5,
                borderRadius: 5,
                backgroundColor: searchBackColor,
                flexDirection: 'row'
            }
            :
            {
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
        }
    },
    main: {
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
}

export default styles