const Rent = require('../models/rent');

exports.getRent = (req, res, next) => {
    Rent.findAll().then(rent => {
        res.status(200).json({
            "message": "success",
            "data": rent[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createRent = (req, res, next) => {
    const rentShop = req.body.rentShop;
    const costOfUtilities = req.body.costOfUtilities;
    const cleaningFee = req.body.cleaningFee;
    
    const member = new Member(null, rentShop, costOfUtilities, cleaningFee);
    member.save().then(() => {
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