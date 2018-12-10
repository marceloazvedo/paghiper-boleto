module.exports = (url, method, body) => {
    const req = {
        method: method,
        url: url,
        body: body
    }
    if(body)
        req.json = true
    return req
}