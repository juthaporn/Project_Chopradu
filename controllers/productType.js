const ProductType = require('../models/productType');

exports.getProductType = (req, res, next) => {
    ProductType.findAll().then(productType => {
        res.status(200).json({
            "message": "success",
            "data": productType[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createProductType = (req, res, next) => {
    // const typeID = req.body.typeID;
    // const typeName = req.body.typeName;
    const {typeID, typeName} = req.body
    console.log(req.body)
    const productType = new ProductType(typeID, typeName);
    productType.save().then(() => {
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

exports.getEditProductType = (req, res, next) => {
    const typeID = req.params.typeID;
    ProductType.findById(typeID).then((productType) => {
        res.status(200).json({
            "message": "success",
            "data": productType[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editProductType = (req, res, next) => {
    // const typeID = req.body.typeID;
    const typeName = req.body.typeName;
    
    const productType = new ProductType(null, typeName);
    productType.save().then(() => {
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