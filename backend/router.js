const express = require('express');
const { authenticateToken, verifyUser } = require('./auth/verifyToken');
const routers = require('./controller/auth');
const router = express.Router();
const getUser= require('./controller/getUser');
const item=require('./controller/cartItem')
router.post('/createUser', routers.register);
router.post('/login', routers.login);
router.get('/getUser', getUser.getUserFunction);
router.post('/cart', item.cart)

router.get('/user',authenticateToken, verifyUser);

module.exports = router;
