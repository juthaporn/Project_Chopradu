const ProductType = require('../util/database');

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