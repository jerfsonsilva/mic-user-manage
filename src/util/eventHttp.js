module.exports.inputEventHttp = (event) => {
    return JSON.parse(event.body) || [];
}
module.exports.queryEventHttp = (event) => {
    return event.queryStringParameters || [];
}
module.exports.paramEventHttp = (event) => {
    return event.pathParameters;
}
module.exports.response = (statusCode, body) => {
    return {
        statusCode,
        body: JSON.stringify(body)
    }
}