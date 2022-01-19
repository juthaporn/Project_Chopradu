const Shop = require('../models/shop');

exports.getShop = (req, res, next) => {
    Shop.findAll().then(shop => {
        res.status(200).json({
            "message": "success",
            "data": shop[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createShop = (req, res, next) => {
    const shopID = req.body.shopID;
    const shopName = req.body.shopName;
    const shopPhone = req.body.shopPhone;
    const shopDetail = req.body.shopDetail;
    const openingTime = req.body.openingTime;
    const shopType = req.body.shopType;
    const shopRentalContract = req.body.shopRentalContract;
    
    const shop = new Shop(shopID, shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract);
    shop.save().then(() => {
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


// exports.getEditAddress = (req, res, next) => {
//     const user_id = req.params.user_id;
//     User.findById(user_id).then((user) => {
//         res.status(200).json({
//             "message": "success",
//             "data": user[0]
//         });
//     }).catch((error) => {
//         res.status(500).json({
//             "message": error
//         });
//     });
// }

// exports.editAddress = (req, res, next) => {
//     const address = req.body.address;
//     const tel = req.body.tel;
    
//     const user = new User(null, address, tel);
//     user.save().then(() => {
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

// exports.deleteAddress = (req, res, next) => {
//     const user_id = req.query.product_id;
//     User.delById(user_id).then(() => {
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