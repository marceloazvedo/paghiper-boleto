const request = require('request')
const buildRequest = require('../config/build-request')

const URL = 'https://api.paghiper.com/transaction/cancel/'
const METHOD = 'POST'

const options = (apiKey, token, status, transactionId) => buildRequest(URL, METHOD, {
    token: token,
    apiKey: apiKey,
    status: status,
    transaction_id: transactionId
})

module.exports = (apiKey, token, status, transactionId) => new Promise((resolve, reject) => {
    request(options(apiKey, token, status, transactionId), (error, response, body) => {
        if (error) reject(new Error(error))
        resolve(body)
    })
})