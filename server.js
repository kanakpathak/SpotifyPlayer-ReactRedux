const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app =express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req,res,next)=>{

    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Method', 'PUT, POST, GET, DELETE, PATCH');
        res.status(200).json({});
    }
    else{
        next();    
    }

});


app.use('/test', require('./routes'))
app.use('/api', require('./auth/app'))

//just for reference, to be used further
// app.get('/*',)
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(422).send({error: err.message})
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server started on port ${port}`)
});
