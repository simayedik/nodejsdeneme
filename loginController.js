const { body, validationResult } = require('express-validator');
const User = require('./user');


module.exports.indexPost = function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        console.log(req.body);
        const data = { 
           IP: req.ip,
           ad: req.body.ad,
           soyad: req.body.soyad,
           email: req.body.email,
           lokasyon: req.body.lokasyon,
           sehir: req.body.sehir,
           sifre: req.body.sifre,
           nickname: req.body.nickname,
        }
     
         User.reqisterUser(data);
        res.render('login',{ errors : errors.array()})
    }
    else{
        res.render('index', { errors : errors.array()} )
    } 
};

module.exports.index = function(req,res){
    const errors = validationResult(req);
    
        res.render('index', { errors : errors.array()} )

};

module.exports.loginPost = function(req,res){
    const errors = validationResult(req);
  
     res.render('login', { errors : errors.array()}) ;
     console.log(req.body);
    
};


      