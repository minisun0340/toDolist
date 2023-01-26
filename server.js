const bodyParser = require('body-parser');

const express = require('express');
const app = express();

//routing
const home = require('./src/routes/index');

//app setting
app.set('views', __dirname+'/src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', home);

app.listen(8080, ()=>{
    console.log('listening on port 8080');
})
