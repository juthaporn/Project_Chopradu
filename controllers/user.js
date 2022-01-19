const User = require('../models/user');

exports.getUser = (req, res, next) => {
    User.findAll().then(user => {
        res.status(200).json({
            "message": "success",
            "data": user[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createUser = (req, res, next) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // const name = req.body.name;
    // const phone = req.body.phone;
    const {userID, username, password, name, phone} = req.body
    console.log(req.body)
    const user = new User(userID, username, password, name, phone);
    user.save().then(() => {
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

// exports.createAddress = (req, res, next) => {
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const address = req.body.address;
    
//     const user = new User(null, firstname, lastname, address);
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