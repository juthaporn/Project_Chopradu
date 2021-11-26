const Order = require('../models/order');

exports.getOrder = (req, res, next) => {
    Order.findAll().then(order => {
        res.status(200).json({
            "message": "success",
            "data": order[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.createOrder = (req, res, next) => {
    // const date = req.body.date;
    // const status = req.body.status;
    const quantity = req.body.quantity;
    // const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    
    const order = new Order(null, quantity, product_id);
    order.save().then(() => {
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

exports.getEditOrder = (req, res, next) => {
    const user_id = req.params.user_id;
    User.findById(user_id).then((user) => {
        res.status(200).json({
            "message": "success",
            "data": user[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editOrder = (req, res, next) => {
    const status = req.body.status;
    const quantity = req.body.quantity;
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    
    const order = new Order(null, status, quantity, user_id, product_id);
    order.save().then(() => {
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

exports.deleteOrder = (req, res, next) => {
    const orderID = req.query.order_id;
    order.delById(orderID).then(() => {
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