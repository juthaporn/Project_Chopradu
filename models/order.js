const db = require('../util/database');

module.exports = class Order{

    constructor(orderID, orderName, orderStatus, memberID, adminID){
        this.orderID = orderID;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.memberID = memberID;
        this.adminID = adminID;
    }

    static findAll(){
        // return db.execute("select order.order_id, order.date, order.status, order.quantity, user.user_id, product.product_name, product.brand, product.color, product.price from order join user on order.user_id = user.user_id, join product on order.product_id = product.product_id");
        return db.execute("select * from order");
    }

    save(){
        if(this.orderID){
            return db.execute(
                'update order set orderName=?, orderStatus=?, memberID=?, adminID=? where orderID = ?',
                [this.orderID, this.orderName, this.orderStatus, this.memberID, this.adminID, this.orderID]
            );
        }else{
            return db.execute(
                'insert into order (orderName, orderStatus, memberID, adminID) values(?,?,?,?)',
                [this.orderName, this.orderStatus, this.memberID, this.adminID,]
            );
        }
    }

    static findById(orderID){
        return db.execute(
            'select * from order where orderID = ?',
            [this.orderID]
        );
    }

}