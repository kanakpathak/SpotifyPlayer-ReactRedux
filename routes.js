const testOperation = require('./db/controllers/testOperation');
const authorization = require('./auth/authorization_code');
const express = require('express');
const router = express.Router();

router.get('/result', testOperation.getTest);
router.post('/result', testOperation.storeTest);
router.put('/result/:id', testOperation.updateTest);
router.delete('/result/:id', testOperation.deleteTest);







module.exports = router;