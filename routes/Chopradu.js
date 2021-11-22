const express = require('express');
const router = express.Router();

//user
router.get('/add-user',userController.createUser);
router.get('/user',userController.getUser);

module.exports = router;