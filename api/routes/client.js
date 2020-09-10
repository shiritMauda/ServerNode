const express = require('express');
const router = express.Router();
module.exports = router;   
  
 router.get('/', function (req, res) {

     var sql = require("mssql");

    // config for your database
    var config = {
        user: 'shirit',
        password: 'Epr1182!@#',
        server: 'EPR-228-SHIRIT\SHIRITMAUDA', 
        database: 'iditZugit' ,
        
    };
try{


    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from client', function (err, recordset) {
            
            if (err) console.log(err);

            // send records as a response
            res.send(recordset);
             res.status(200).json({
                messeage:'database'
            }); 
            
        });
    }); 
}
catch{
    res.status(200).json({
        messeage:'error'
    }); 
}
});  