const authorization = require('./authorization_code');
const express = require('express');
const router = express.Router();

router.get('/getAuth', authorization.getAuthorization);
router.get('/callback', authorization.redirectCallback);
router.get('/refresh', authorization.regenerateAccessToken);

module.exports = router;