let express = require('express');
let app = express();
let mysql = require('mysql');
app.use(express.static('public'));
app.set('view engine', 'pug');
app.listen(3000, function(){
    console.log('node express');
});
let conn = mysql.createConnection(
    {
        'host' : 'localhost',
        'user' : 'root',
        'password' : ''
    }
);
app.get('/', function(request, response){
    response.render("main",{"geri":"Geri Halliwell"});
});