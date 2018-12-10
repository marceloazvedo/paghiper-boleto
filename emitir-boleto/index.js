const request = require('request')
const buildRequest = require('../config/build-request')

const URL = 'https://api.paghiper.com/transaction/create/'
const METHOD = 'POST'

const options = (apiKey, sale, payer, items, opts) => {
    const body = {
        apiKey: apiKey,
        order_id: sale.uuid,
        payer_email: payer.email,
        payer_name: payer.name,
        payer_cpf_cnpj: payer.cpfCnpj,
        days_due_date: sale.daysDueAmount,
        type_bank_slip: sale.boletoType,
        items: items
    }

    if (payer.phone)
        body.payer_phone = payer.phone
    if (payer.address) {
        if (payer.address.street)
            body.payer_street = payer.address.street
        if (payer.address.number)
            body.payer_number = payer.address.number
        if (payer.address.complement)
            body.payer_complement = payer.address.complement
        if (payer.address.district)
            body.payer_district = payer.address.district
        if (payer.address.city)
            body.payer_city = payer.address.city
        if (payer.address.state)
            body.payer_state = payer.address.state
        if (payer.address.zipCode)
            body.payer_zip_code = payer.address.zipCode
    }
    if (sale.discountCents)
        body.discount_cents = sale.discountCents
    if (sale.shippingPrice)
        body.shipping_price_cents = sale.shippingPrice
    if (sale.partnersId)
        body.partners_id = sale.partnersId
    if (sale.notaFiscalNumber)
        body.number_ntfiscal = sale.notaFiscalNumber
    if (sale.finePercentage)
        body.late_payment_fine = sale.finePercentage
    if (sale.perDayInterest)
        body.per_day_interest = sale.perDayInterest
    if (sale.earlyPaymentDiscountsDays)
        body.early_payment_discounts_days = sale.earlyPaymentDiscountsDays
    if (sale.openAfterDayDue)
        body.open_after_day_due = sale.openAfterDayDue
    if (opts.fixedDescription)
        body.fixed_description = opts.fixedDescription
    return buildRequest(URL, METHOD, body)
}

module.exports = (apiKey, sale, payer, items, opts) => new Promise((resolve, reject) => {
    request(options(apiKey, sale, payer, items, opts), (error, response, body) => {
        if (error) reject(new Error(error))
        resolve(body)
    })
})