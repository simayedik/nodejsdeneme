var db = require('./db');
const { v4: uuidv4 } = require('uuid');
var express = require('express');
var app = express();

class User{
  static async  selectsorgusu(){
        db.connect((err) => {
            if (err) {
                console.error('Bağlantı hatası:', err);
                throw err;
            }
            console.log('MySQL veritabanına başarıyla bağlandı.');
            
            // Örnek bir sorgu
            db.execute('SELECT * FROM newreqister ', (err, results) => {
                if (err) {
                    console.error('Sorgu hatası:', err);
                    throw err;
                }
                console.log('Sonuçlar:', results); // Sorgu sonuçlarını log'la
                // Bağlantıyı kapat
                db.end();
            });
        });
        
    }
    static async findUsername(username){
        return new Promise((resolve, reject) => {
        db.connect((err) => {
            if (err) {
                console.error('Bağlantı hatası:', err);
                throw err;
            }
            console.log('MySQL veritabanına başarıyla bağlandı.');
            
         var sql = 'SELECT * FROM kullanicikayit WHERE username= ?';
            db.execute(sql,[username], (err, results) => {
                if (err) {
                    console.error('Sorgu hatası:', err);
                    throw err;
                }
              
              
               
                resolve(results[0]); 
            });
        });
        });
        db.end();
    }
  


     static async reqisterUser(data){
        db.connect((err) => {
            if (err) {
                console.error('Bağlantı hatası:', err);
                throw err;
            }
            console.log('MySQL veritabanına başarıyla bağlandı.');
            
            // Örnek bir sorgu
    
            const sql = 'INSERT INTO reqister (IP,uuid,email,ad,soyad,lokasyon,sehir,sifre,nickname) VALUES (?,?,?,?,?,?,?,?,?)';
                 
                db.execute(sql, [data.IP,uuidv4(),data.email,data.ad,data.soyad,data.lokasyon,data.sehir,data.sifre,data.nickname], (err, result) => {
    
                        if (err) {
                            console.error('Insert sorgusu hatası:', err);
                       
                        }
               
                       
                    db.end();
                });
            
                
        });
        
    }
     static async updateSorgusu(){
        db.connect((err) => {
            if (err) {
                console.error('Bağlantı hatası:', err);
                throw err;
            }
            console.log('MySQL veritabanına başarıyla bağlandı.');
            
            // Örnek bir sorgu
    
            const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
                connection.execute(sql, [newUsername, newEmail, userId], (err, result) => {
                    if (err) {
                        console.error('Update sorgusu hatası:', err);
                        reject(err);
                    }
           
                console.log('Sonuçlar:', result); // Sorgu sonuçlarını log'la
                // Bağlantıyı kapat
                db.end();
            });
        });
        
    }
    
    
    
    
     static async deleteSorgusu(ID){
        db.connect((err) => {
            if (err) {
                console.error('Bağlantı hatası:', err);
                throw err;
            }
            console.log('MySQL veritabanına başarıyla bağlandı.');
            
            // Örnek bir sorgu
    
            const sql = 'DELETE FROM kullanicikayit WHERE id = ?';
            db.execute(sql, [ID], (err, result) => {
                if (err) {
                    console.error('Delete sorgusu hatası:', err);
                    reject(err);
    }
    
                // // Bağlantıyı kapat
                // db.end();
            });
        });
        
    }  


}

module.exports = User;