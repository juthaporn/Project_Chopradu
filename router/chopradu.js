const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const memberController = require('../controllers/member');
const shopController = require('../controllers/shop');
const productTypeController = require('../controllers/productType');
const rentController = require('../controllers/rent');
const orderController = require('../controllers/order');
const yearRentController = require('../controllers/yearRent');

//member
router.get('/member',memberController.getMember);

router.post('/add-member',memberController.createMember);

// router.get('/edit-user/:userID', userController.getEditUser);

// router.post('/edit-user', userController. s);

// router.get('/delete-user', userController.deleteUser);

//shop
router.get('/shop', shopController.getShop);

router.post('/add-shop', shopController.createShop);

router.get('/edit-shop/:shopID', shopController.getEditShop);

router.post('/edit-shop', shopController.editShop);

router.get('/delete-shop/:shopID', shopController.deleteShop);


//rent
router.get('/rent', rentController.getRent)

router.post('/add-rent',rentController.createRent);

//YearRent
router.get('/yearRent', yearRentController.getYearRent)

router.post('/add-yearRent',yearRentController.createYearRent);


// prodcts
router.get('/products', productController.getProduct);

router.post('/add-products', productController.createProduct);

router.get('/edit-products/:productID', productController.getEditProduct);

router.post('/edit-products', productController.editProduct);

router.get('/delete-products/:productID', productController.deleteProduct);


// productType
router.get('/productType', productTypeController.getProductType);

router.post('/add-productType', productTypeController.createProductType);

router.get('/edit-productsType/:typeID', productTypeController.getEditProductType);

router.post('/edit-productsType', productTypeController.editProductType);

router.get('/delete-productsType/:typeID', productTypeController.deleteProductType);


// // order
// router.get('/order',orderController.getOrder);

// router.post('/add-order',orderController.createOrder);

// router.get('/edit-order/:orderID',orderController.getEditOrder);

// router.post('/edit-order',orderController.editOrder);

// router.get('/delete-order',orderController.deleteOrder);


module.exports = router;