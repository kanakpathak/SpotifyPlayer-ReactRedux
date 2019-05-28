const config = require('./config');
const mongoose = require('mongoose');
options = {
    useNewUrlParser: true
}
mongoose.connect(config.dbURL, options)
.then(()=>{console.log('Connected to mongoDb..')})
.catch(()=>{console.log('Could not connect to mongoDb. Some error occurred...')});

module.exports = mongoose;