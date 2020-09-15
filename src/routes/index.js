
const request = require('request');

_EXTERNAL_URL= 'https://plataformase.wl.r.appspot.com/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/';
//console.log(instituciones);


const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL, {json: true}, (err,res,body) => {
    
    if (err){
      return callback(err);
    }

    return callback(body);

    
  });
}


module.exports.callApi = callExternalApiUsingRequest;
