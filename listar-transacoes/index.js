const request = require("request")
const buildRequest = require('../config/build-request')

const URL = 'https://api.paghiper.com/transaction/list/'
const METHOD = 'POST'

const options = (apiKey, token, query) => {
    const body = {
        token: token,
        apiKey: apiKey,
    }
    Object.keys(query).map(key => {
        if (query[key])
            body[key] = query[key]
    })
    console.log('Url: ' + URL)
    return buildRequest(URL, METHOD, body)
}

module.exports = new Promise((resolve, reject) => request(options(apiKey, token, query), function (error, response, body) {
    if (error) reject(new Error(error))
    resolve(body)
}))