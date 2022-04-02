const YearRent = require('../models/yearRent');

exports.getYearRent = (req, res, next) => {
    YearRent.findAll().then(yearlyrent => {
        res.status(200).json({
            "message": "success",
            "data": yearlyrent[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createYearRent = (req, res, next) => {
    const {rentDetail, rentalFee, shopID} = req.body
    const yearlyrent = new YearRent(null, rentDetail, rentalFee, shopID)
        yearlyrent.save().then(() => {
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