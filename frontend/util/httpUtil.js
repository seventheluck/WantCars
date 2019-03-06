const httpGet = function (url, parameter) {

    const http = new XMLHttpRequest();
    http.open("GET", url, false);
    //http.responseType = "json";
    if (parameter !== null)
        http.send(parameter);
    else
        http.send(null);
    return JSON.parse(http.responseText);
}

const httpPost = function (url, parameter) {
    const http = new XMLHttpRequest();
    const param = JSON.stringify(parameter);
    http.open('POST', url, false);
    http.send(param);
    return JSON.parse(http.responseText);
}



const HOST = "http://localhost";
const PORT = "8090";
const URL = HOST + ":" + PORT + "/";


