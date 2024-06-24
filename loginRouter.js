var express = require('express');
var router = express.Router();
var User = require('./user');

var ctrl = require('./loginController');
const { body, validationResult } = require('express-validator');


router.get('/login', ctrl.index);
router.get('/',ctrl.loginPost);

router.post('/',
  [
    body('email')
      
      .isEmail( async value => {
        const email = req.body.email
      
      if (!validator.isEmail(email)) {
        throw new Error('Kullanıcı adı kullanılıyor başka kullanıcı adı giriniz');
       }
      })
      ,



    body('password')
      .isLength({ min: 5, max: 10 })
      .withMessage('Password boş bırakılamaz ve en az 5 karkater olmalı'),
  ],


  ctrl.loginPost);

  
router.post('/login',
  [
    body('ad')
    .notEmpty()
    .withMessage('Ad boş bırakılamaz')
     ,
      body('soyad')
      .notEmpty()
      .withMessage('Soyad boş bırakılamaz')
      ,
      body('email')
      .notEmpty()
      .isEmail()
      .withMessage('boş bırakılamaz ve en az 3 karkater olmalı')
      // .custom(async value => {
      //   const results = await User.findUsername(value)
      //   if (results) {
      //     throw new Error('Kullanıcı adı kullanılıyor başka kullanıcı adı giriniz');
      //   }
      // })
      ,
      body('lokasyon')
      .notEmpty()
     ,



    body('sehir')
    .notEmpty()
      .isLength({ min: 5, max: 10 })
      .withMessage('sehir boş bırakılamaz ve en az 5 karkater olmalı'),
      
    body('sifre')
    .notEmpty()
     ,
      body('sifredogrulama')
      .notEmpty()
      .custom((value, { req }) => {
        if (value !== req.body.sifre) {
            throw new Error('Şifreler eşleşmiyor');
        }
        return true;
    })
     ,
      body('nickname')
      // .notEmpty()
      // .isLength({ min: 5, max: 10 })
      // .withMessage('Nickname boş bırakılamaz ve en az 5 karkater olmalı')
      // .custom(async value => {
      //   const results = await User.findNickname(value)
      //   if (results) {
      //     throw new Error('Nickname Kullanılıyor başka bir nickanme deneyiniz');
      //   }
      // }),
      
  ],
  
 

  ctrl.indexPost);



module.exports = router;

