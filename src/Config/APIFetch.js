// const ServicesUrl = {
//     Url: "http://13.126.29.126:8080/", // QA 
//     Method: { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' },
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
// }
require('../GlobalVariables/Variables');
exports.apiFetch = function (endPoint, type, data, callback) {
    //console.log("Request for url: " + endPoint + " is: ")
    //console.log(data)
    const url = servicesUrl.Url + endPoint;
    fetch(url, {
        method:servicesUrl.Method[type],
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(responseJson){
        callback(null, responseJson)
    })
    .catch(function(error){
        callback(error, null)
    })
}
