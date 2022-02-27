const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            data: products[0],
            "message": "success"
            
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
    console.log(req.body)
    const {productName, productDetail, productPrice, typeID} = req.body
    const product = new Product(null ,productName, productDetail, productPrice, typeID);
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
    const {productID} = req.params
    Product.findById(productID).then((products) => {
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

exports.editProduct = (req, res, next) => {
    // const product_name = req.body.product_name;
    // const brand = req.body.brand;
    // const color = req.body.color;
    // const type = req.body.type;
    // const description = req.body.description;
    // const price = req.body.price;
    console.log(req.body)
    const {productID, productName, productDetail, productPrice, typeID} = req.body;
    // const product = new Product(null, product_name, brand, color, type, description, price);
    const product = new Product(productID, productName, productDetail, productPrice, typeID)
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

exports.deleteProduct = (req, res, next) => {
    // const productID = req.query.product_id;
    console.log(req.params)
    const {productID} = req.params;
    Product.delById(productID).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error,
            "result": false
        });
    });
}