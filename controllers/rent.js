const MonthlyRentalFee = require('../models/rent');

exports.getRent = (req, res, next) => {
    MonthlyRentalFee.findAll().then(monthlyRentalFee => {
        res.status(200).json({
            "message": "success",
            "data": monthlyRentalFee[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createRent = (req, res, next) => {
    const rentalDetail = req.body.rentalDetail;
    const waterBill = req.body.waterBill;
    const electricityBill = req.body.electricityBill;
    const cleaningFee = req.body.cleaningFee;
    const wasteDisposalFee = req.body.wasteDisposalFee;
    
    const monthlyRentalFee = new MonthlyRentalFee(null, rentalDetail, waterBill, electricityBill, cleaningFee, wasteDisposalFee);
    monthlyRentalFee.save().then(() => {
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