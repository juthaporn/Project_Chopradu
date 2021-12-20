const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

// exports.getWomenProduct = (req, res, next) => {
//     Product.findByTypeWomen().then(products => {
//         res.status(200).json({
//             "message": "success",
//             "data": products[0]
//         });
//     }).catch(error => {
//         res.status(500).json({
//             "message": error
//         });
//     });
// }

// exports.getMenProduct = (req, res, next) => {
//     Product.findByTypeMen().then(products => {
//         res.status(200).json({
//             "message": "success",
//             "data": products[0]
//         });
//     }).catch(error => {
//         res.status(500).json({
//             "message": error
//         });
//     });
// }

exports.createProduct = (req, res, next) => {
    const productName = req.body.productName;
    // const image = req.body.image;
    const productDetail = req.body.productDetail;
    const productPrice = req.body.productPrice;
    // const type = req.body.type;
    // const description = req.body.description;
    // const price = req.body.price;
    
    const product = new Product(null, productName, productDetail, productPrice);
    product.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getEditProduct = (req, res, next) => {
    const product_id = req.params.product_id;
    Product.findById(product_id).then((products) => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

// exports.editProduct = (req, res, next) => {
//     const product_name = req.body.product_name;
//     const brand = req.body.brand;
//     const color = req.body.color;
//     const type = req.body.type;
//     const description = req.body.description;
//     const price = req.body.price;
    
//     const product = new Product(null, product_name, brand, color, type, description, price);
//     product.save().then(() => {
//         res.status(200).json({
//             "message": "success",
//             "result": true
//         });
//     }).catch((error) => {
//         res.status(200).json({
//             "message": error,
//             "result": false
//         });
//     });
// }

// exports.deleteProduct = (req, res, next) => {
//     const product_id = req.query.product_id;
//     Product.delById(product_id).then(() => {
//         res.status(200).json({
//             "message": "success",
//             "result": true
//         });
//     }).catch((error) => {
//         res.status(500).json({
//             "message": error,
//             "result": false
//         });
//     });
// }