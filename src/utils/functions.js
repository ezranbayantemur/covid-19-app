import axios from 'axios'

export async function createList() {
    let
        { data: { response: covidSum } } = await axios.get("https://covid-193.p.rapidapi.com/statistics", { headers: { "x-rapidapi-host": "covid-193.p.rapidapi.com", "x-rapidapi-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" } }),
        { data: countries } = await axios.get("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", { headers: { "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com", "x-rapidapi-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" } })

    return convertToData(covidSum, countries)
}

function convertToData(covidSum, countries) {
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

                dataObj.region = currentCon.region
                dataObj.PercentConfirmed = ((dataObj.cases.total * 100) / currentCon.population)
                dataObj.PercentDeath = ((dataObj.deaths.total * 100) / dataObj.cases.total)
                dataObj.PercentRecovered = ((dataObj.cases.recovered * 100) / dataObj.cases.total)

                responseData.push(dataObj)
            }
        }
    }

    return [
        // Schwartzian transform
        responseData.map((item, index) => ([+item.cases.total, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item),
        responseData.map((item, index) => ([+item.PercentConfirmed, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse(),
        responseData.map((item, index) => ([+item.PercentDeath, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse(),
        responseData.map((item, index) => ([+item.PercentRecovered, { ...item, listIndex: index }])).sort(([a], [b]) => b - a).map(([, item]) => item).reverse()
    ]

}

