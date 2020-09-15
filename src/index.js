const express = require('express');
const app = express();
const request = require ('request');
const async = require ('async');
const { response } = require('express');
const { clearCache } = require('ejs');
const cors = require('cors');


app.use(cors());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
  


app.get ('/Api/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/', (req, res) =>{
    
  let options ={
    url:'https://plataformase.wl.r.appspot.com/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/',
    method: 'GET',
    json: true

  };
  request (options, function(err, r){
     res.send(r.body);
      

  });

});

app.get ('/Api/SigApp/getEscuelas', (req, res) =>{
    
  let options ={
    url:'https://plataformase.wl.r.appspot.com/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/',
    method: 'GET',
    json: true

  };
  request (options, function(err, r){
     res.send(r.body);
      

  });

});

app.get ('/Api/SigApp/SigMovil/id/:pk1', (req, res) =>{
 
  let pk1 = req.params.pk1;

  let options ={
    url:'https://plataformase.wl.r.appspot.com/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/',
    method: 'GET',
    json: true

  };
  
  
  request (options, function(err, r){

     var content = JSON.parse(r.body);
     //console.log(content)
      
     var natha = content.filter(function node(el) {
       
       return (el.pk === pk1);

     });

     //console.log(natha);
      res.send(natha);
  });
    
   
  //res.send(natha);

});


   app.get('/Api/SigApp/SigMovilFiltros/:MEDIASUPERIOR/:SUPERIOR/:PRIVADO/:PUBLICO/',(req, res) => {


    let MEDIASUPERIOR = req.params.MEDIASUPERIOR;
    let SUPERIOR = req.params.SUPERIOR;
    let PRIVADO = req.params.PRIVADO;
    let PUBLICO = req.params.PUBLICO;


    let options = {
      url: 'https://plataformase.wl.r.appspot.com/SigApp/SigMovilFiltros/MEDIA-SUPERIOR/SUPERIOR/PRIVADO/PUBLICO/',
      method: 'GET',
      json: true
    };


    request(options, function (err, r) {

      var todo = JSON.parse(r.body);
   
      //var todos = JSON.parse(r.body);
      //console.log(content)

    
      var natha1 = todo.filter(function node1(ell) {
        const media = MEDIASUPERIOR.replace("-", " ");
         
        if (PUBLICO == "PUBLICO"){
           
          PUBLICO = "PÚBLICO"
        }
        
        
        if (media == "MEDIA SUPERIOR" && SUPERIOR != "SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields.Nivel === media);
        }

         
        if ( SUPERIOR == "SUPERIOR" && media != "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields.Nivel === SUPERIOR);
        }
 

        if ( SUPERIOR != "SUPERIOR" && media != "MEDIA SUPERIOR" && PRIVADO == "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields.Dominio === PRIVADO);
        }

        if ( SUPERIOR != "SUPERIOR" && media != "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO == "PÚBLICO"){

          return (ell.fields.Dominio === PUBLICO);
        }

        if ( SUPERIOR == "SUPERIOR" && media == "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields);
        }

        if ( SUPERIOR != "SUPERIOR" && media == "MEDIA SUPERIOR" && PRIVADO == "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields.Dominio === PRIVADO && ell.fields.Nivel === media);
        }

        if ( SUPERIOR != "SUPERIOR" && media == "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO == "PÚBLICO"){

          return (ell.fields.Dominio === PUBLICO && ell.fields.Nivel === media);
        }
        
        if ( SUPERIOR == "SUPERIOR" && media != "MEDIA SUPERIOR" && PRIVADO == "PRIVADO" && PUBLICO != "PÚBLICO"){

          return (ell.fields.Dominio === PRIVADO && ell.fields.Nivel === SUPERIOR);
        }
        
        if ( SUPERIOR == "SUPERIOR" && media != "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO == "PÚBLICO"){

          return (ell.fields.Dominio === PUBLICO && ell.fields.Nivel === SUPERIOR);
        }

        if ( SUPERIOR == "SUPERIOR" && media == "MEDIA SUPERIOR" && PRIVADO == "PRIVADO" && PUBLICO != "PÚBLICO"){
            
          return ( ell.fields.Dominio === PRIVADO);
        }

        if ( SUPERIOR == "SUPERIOR" && media == "MEDIA SUPERIOR" && PRIVADO != "PRIVADO" && PUBLICO == "PÚBLICO"){
            
          return ( ell.fields.Dominio === PUBLICO);
        }
        
        
        
 

         console.log("el resultado es"+ natha1);
          
        
      });

      
      
    
      res.send(natha1);
    
    });
    //res.send(natha);
  });
  
  




//settings
app.set('port', process.env.PORT || 3000);
//app.set('json spaces',2);


//routes
//app.use(require('./routes/index'));

//midleware
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());


// servidor escuchando
app.listen(app.get('port'), () => {
 console.log(`Server on port ${app.get('port')}`);
});