
const sessionUrl = '/js/session.json';
let sessionList = [];
function getSession(){
    return new Promise(function(resolve, reject){
        var oReq = new XMLHttpRequest();
        oReq.onload = function(e)
        {
            sessionList= e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionUrl, true);
        oReq.responseType ='json';
        oReq.send();
    })
}

 //export {getSession};