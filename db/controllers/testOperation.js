const testCollection = require('../models/testSchema');

const testOperations = {
    getTest: async function(req, res){
        console.log('inside getTest');
        // const result = await testCollection.find(
        //     {userId: req.body.user.userId}
        // )
        res.send(
            {
                message: 'inside getTest'
            }
        );
    },

    storeTest: async function(req, res){
        console.log('inside putTest');
        res.send(
            {
                message: 'inside storeTest'
            }
        );
    },
    
    updateTest: async function(req, res){
        console.log('inside updateTest');
        res.send(
            {
                message: 'inside updateTest'
            }
        );
    },

    deleteTest: async function(req, res){
        console.log('inside deleteTest');
        res.send(
            {
                message: 'inside deleteTest'
            }
        );    }
}

module.exports = testOperations;