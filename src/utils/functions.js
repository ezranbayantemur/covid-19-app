import axios from 'axios'


var
    covidSum = [],
    countries = []

export async function createList() {
    let
        { data: { response: covidSumData } } = await axios.get("https://covid-193.p.rapidapi.com/statistics", { headers: { "x-rapidapi-host": "covid-193.p.rapidapi.com", "x-rapidapi-key": "0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551" } }),
        { data: countriesData } = await axios.get("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", { headers: { "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com", "x-rapidapi-key": "0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551" } })

    covidSum = covidSumData
    countries = countriesData

    //Pulled USA and UK especially, because country and covid API's has different name for them
    let
        usaData = matchCountry("United States", "USA"),
        ukData = matchCountry("United Kingdom", "UK")

    ////////////

    let
        responseData = [],
        covidLen = covidSum.length,
        countriesLen = countries.length

    for (let conIndex = 0; conIndex < countriesLen; conIndex++) {
        for (let covIndex = 0; covIndex < covidLen; covIndex++) {
            if (countries[conIndex].name.trim() === covidSum[covIndex].country.trim()) {
                let
                    dataObj = {},
                    currentCon = { ...countries[conIndex] },
                    currentCov = { ...covidSum[covIndex] }

                dataObj = { ...currentCov }

                dataObj.region = `(${currentCon.region})`
                dataObj.coordinates = { latitude: currentCon.latlng[0], longitude: currentCon.latlng[1] }
                dataObj.PercentConfirmed = ((dataObj.cases.total * 100) / currentCon.population)
                dataObj.PercentDeath = ((dataObj.deaths.total * 100) / dataObj.cases.total)
                dataObj.PercentRecovered = ((dataObj.cases.recovered * 100) / dataObj.cases.total)

                responseData.push(dataObj)
            }
        }
    }


    //Pulled WORLD data
    let worldData = { ...covidSum.find(data => data.country === "All") }

    worldData.country = "World"
    worldData.PercentConfirmed = ((worldData.cases.total * 100) / 6730998923)
    worldData.PercentDeath = ((worldData.deaths.total * 100) / worldData.cases.total)
    worldData.PercentRecovered = ((worldData.cases.recovered * 100) / worldData.cases.total)

    ////////////

    responseData.push(usaData, ukData, worldData)

    return [
        // Schwartzian transform
        responseData.map((item, index) => ([+item.cases.total, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item),
        responseData.map((item, index) => ([+item.PercentConfirmed, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse(),
        responseData.map((item, index) => ([+item.PercentDeath, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse(),
        responseData.map((item, index) => ([+item.PercentRecovered, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse()
    ]
}

export function matchCountry(conName, covName) {
    let currentData = { ...covidSum.find(data => data.country === covName) }
    let currentCountry = countries.find(data => data.name === conName)

    currentData.region = `(${currentCountry.region})`
    currentData.coordinates = { latitude: currentCountry.latlng[0], longitude: currentCountry.latlng[1] }
    currentData.PercentConfirmed = ((currentData.cases.total * 100) / currentCountry.population)
    currentData.PercentDeath = ((currentData.deaths.total * 100) / currentData.cases.total)
    currentData.PercentRecovered = ((currentData.cases.recovered * 100) / currentData.cases.total)

    return currentData
}

export async function createDetailData(data) {

    let
        res = await axios.get(`https://covid-193.p.rapidapi.com/history?country=${data.country}`, { headers: { "x-rapidapi-host": "covid-193.p.rapidapi.com", "x-rapidapi-key": "0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551" } }),
        dataList = res.data.response,
        responseList = []

    const arrLen = dataList.length

    for (let index = 0; index < arrLen; index++) {
        const data = dataList[index]
        let dataObj = {}

        dataObj.total = data.cases.total
        dataObj.recovered = data.cases.recovered
        dataObj.death = data.deaths.total
        dataObj.time = data.time

        responseList.push(dataObj)

    }

    responseList.reverse()

    return responseList
}