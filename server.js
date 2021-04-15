const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors);  only require and install cors if api is meant to be accessed by mobile apps or other websites
const router = require('./routes/index');

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/articlesDB';

//app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false});
mongoose.connection.once('open', function(){
    console.log('Connected to the Database');
});
mongoose.connection.on('error', function(error){
    console.log('Mongooose Connection Error: ' + error);
})

app.get('/', function(req, res){res.send('hello world')});

app.listen(PORT, function() {console.log('Server is listening on port ${PORT}')});


