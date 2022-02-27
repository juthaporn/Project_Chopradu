const db = require('../util/database');

module.exports = class Product{

    constructor(productID, productName, productDetail, productPrice, typeID){
        this.productID = productID;
        this.productName = productName;
        this.productDetail = productDetail;
        this.productPrice = productPrice;
        this.typeID = typeID;
    }

    static findAll(){
        return db.execute("select * from product");
    }

    save(){
        if(this.productID){
            return db.execute(
                'update product set productName=?, productDetail=?, productPrice=? where productID = ?',
                [this.productName, this.productDetail, this.productPrice, this.productID]
            );
        }else{
            return db.execute(
                'insert into product (productName, productDetail, productPrice, typeID) values(?,?,?,?)',
                [this.productName, this.productDetail, this.productPrice, this.typeID]
            );
        }
    }

    static findById(productID){
        return db.execute(
            'select * from product where productID = ?',
            [productID]
        );
    }

    static delById(productID){
        return db.execute(
            "delete from product where productID = ?",
            [productID]
        )
    }
}