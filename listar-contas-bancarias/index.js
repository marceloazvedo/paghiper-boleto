const request = require('request')
const buildRequest = require('../config/build-request')

const URL = 'https://api.paghiper.com/bank_accounts/list/'
const METHOD = 'POST'

const options = (apiKey, token) => {
    return buildRequest(URL, METHOD, {
        token: token,
        apiKey: apiKey
    })
}

module.exports = (apiKey, token) => new Promise((resolve, reject) => {
    request(options(apiKey, token), (error, response, body) => {
        if (error) reject(new Error(error))
        resolve(body)
    })
})