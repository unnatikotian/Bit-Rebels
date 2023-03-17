const express = require('express');
const mongoDb = require('./db');
const app = express();
const cors = require('cors');
const User = require('./models/User');
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(require('./Routes/CreateUser'))
mongoDb()

app.get('/login',function(req,res){
    res.send('Login server')
})

app.get('/',function(req,res){
    res.send('Hello!');
});

app.get('/signup',function(req,res){
    if(json.success){
        res.redirect('/login')
    }
})




app.listen(8000,()=>{
    console.log('Connected to Port 8000')
})