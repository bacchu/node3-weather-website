const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/68c0ee43008143a3675dbe87892a15e4/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)   
        } else if (body.error){
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' C degrees. High Temperature Today: ' + body.daily.data[0].temperatureHigh + ' C degrees. Low Temperature Today: '+ body.daily.data[0].temperatureLow + ' C degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
            }
    })
} 

module.exports = forecast