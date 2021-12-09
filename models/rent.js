const db = require('../util/database');

module.exports = class Rent{

    constructor(rentID, rentShop, costOfUtilities){
        this.rentID = rentID;
        this.rentShop = rentShop;
        this.costOfUtilities = costOfUtilities;
        this.cleaningFee = cleaningFee;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from rent");
    }

    save(){
        if(this.rentID){
            return db.execute(
                'update rent set rentShop=?, costOfUtilities=?, cleaningFee=?, shopID=? where rentID = ?',
                [this.rentID, this.rentShop, this.costOfUtilities, this.cleaningFee, this.shopID, this.rentID]
            );
        }else{
            return db.execute(
                'insert into rent (rentShop, costOfUtilities, cleaningFee, shopID) values(?,?,?,?)',
                [this.rentShop, this.costOfUtilities, this.cleaningFee, this.shopID]
            );
        }
    }

    static findById(rentID){
        return db.execute(
            'select * from rent where rentID= ?',
            [this.rentID]
        );
    }

    // delete Address
    // static delById(product_id){
    //     return db.execute(
    //         'delete from user where user_id = ?',
    //         [this.user_id]
    //     );
    // }
}