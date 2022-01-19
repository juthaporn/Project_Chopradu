const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const userController = require('../controllers/user');
const shopController = require('../controllers/shop');
const productTypeController = require('../controllers/productType');
const rentController = require('../controllers/rent');
const orderController = require('../controllers/order');

//user
router.get('/user',userController.getUser);

router.get('/add-user',userController.createUser);

// router.get('/edit-user/:userID', userController.getEditUser);

// router.post('/edit-user', userController.editUser);

// router.get('/delete-user', userController.deleteUser);

//shop
router.get('/shop', shopController.getShop);

router.post('/add-shop', shopController.createShop);

// router.get('/edit-shop/:shopID', shopController.getEditShop);

// router.post('/edit-shop', shopController.editShop);

// router.get('/delete-shop', shopController.deleteShop);


//rent
router.get('/add-rent',rentController.createRent);

router.get('/rent',rentController.getRent);


// prodcts
router.get('/products', productController.getProduct);

router.post('/add-products', productController.createProduct);

// router.get('/edit-products/:productID', productController.getEditProduct);

// router.post('/edit-products', productController.editProduct);

// router.get('/delete-products', productController.deleteProduct);


//productType
router.get('/productType', productTypeController.getProductType);

router.post('/add-productType', productTypeController.createProductType);

// router.get('/edit-productsType/:productType_id', productController.getEditProductType);
// router.post('/edit-productsType', productController.editProductType);
// router.get('/delete-productsType', productController.deleteProductType);


// order
router.get('/order',orderController.getOrder);

router.post('/add-order',orderController.createOrder);

router.get('/edit-order/:orderID',orderController.getEditOrder);

router.post('/edit-order',orderController.editOrder);

router.get('/delete-order',orderController.deleteOrder);


module.exports = router;