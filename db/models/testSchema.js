const connection = require('../connection');
const Schema = connection.Schema;

const testSchema = new Schema({
    name: String,
    phone: Number,
    userId: String,
    password: String,
    timeStamp: Date
});

const testModel = connection.model('testCollection', testSchema);
module.exports = testModel;

