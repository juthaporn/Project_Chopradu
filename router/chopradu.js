const express = require('express');
const router = express.Router();

//ownerShop
router.get('/add-owner',ownerController.createOwner);

router.get('/owner',ownerController.getOwner);

router.get('/edit-owner/:owner_id',ownerController.getEditOwner);

router.get('/edit-owner',ownerController.editOwner);


//Admin
router.get('/admin',adminController.getAdmin);

router.get('/edit-admin/:admin_id',adminController.getEditAdmin);

router.get('/edit-admin',adminController.editAdmin);


//member
router.get('/add-member',memberController.createMember);

router.get('/member',memberController.getMember);

router.get('/edit-member/:member_id',memberController.getEditMember);

router.get('/edit-member',memberController.editMember);


//user
router.get('/add-user',userController.createUser);

router.get('/user',userController.getUser);


//shop
router.get('/shop', shopController.getShop);

router.post('/add-shop', shopController.createShop);

router.get('/edit-shop/:shop_id', shopController.getEditShop);

router.post('/edit-shop', shopController.editShop);

// router.get('/delete-shop', shopController.deleteShop);


// prodcts
router.get('/products', productController.getProduct);

router.post('/add-products', productController.createProduct);

router.get('/edit-products/:product_id', productController.getEditProduct);

router.post('/edit-products', productController.editProduct);

// router.get('/delete-products', productController.deleteProduct);

//productType
router.get('/productsType', productController.getProductType);

router.post('/add-productsType', productController.createProductType);

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