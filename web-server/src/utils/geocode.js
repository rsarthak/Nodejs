const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=fca03bec59e5424ca9088f1b86461c94`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, { 
                lat: body.features[0].properties.lat,
                lon: body.features[0].properties.lon})
        }
    })
}

module.exports = forecast