const db = require('../util/database');

module.exports = class Product{

    constructor(productID, productName, productDetail, productPrice){
        this.productID = productID;
        this.productName = productName;
        this.productDetail = productDetail;
        this.productPrice = productPrice;
    }

    static findAll(){
        return db.execute("select * from product");
    }

    save(){
        if(this.productID){
            return db.execute(
                'update product set productName=?, productDetail=?, productPrice=? where productID = ?',
                [this.productID, this.productName, this.productDetail, this.productPrice, this.productID]
            );
        }else{
            return db.execute(
                'insert into product (productName, productDetail, productPrice, phone) values(?,?,?)',
                [this.productName, this.productDetail, this.productPrice]
            );
        }
    }

    static findById(productID){
        return db.execute(
            'select * from product where productID = ?',
            [this.productID]
        );
    }

}