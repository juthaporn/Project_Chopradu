const ShopOwner = require('../models/shopOwner');

exports.getShopOwner = (req, res, next) => {
    ShopOwner.findAll().then(shopOwner => {
        res.status(200).json({
            "message": "success",
            "data": shopOwner[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createShopOwner = (req, res, next) => {
    const ownerName = req.body.ownerName;
    const ownerPhone = req.body.ownerPhone;
    
    const shopOwner = new ShopOwner(null, ownerName, ownerPhone);
    shopOwner.save().then(() => {
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