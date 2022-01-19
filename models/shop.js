const db = require('../util/database');

class shop{

    constructor(shopID, shopName, shopPhone, shopDetail, openingTime, shopType, payRent, shopRating, shopRentalContract){
        this.shopID =shopID;
        this.shopName = shopName;
        this.shopPhone = shopPhone;
        this.shopDetail = shopDetail;
        this.openingTime = openingTime;
        this.shopType = shopType;
        this.payRent = payRent;
        this.shopRating = shopRating;
        this.shopRentalContract = shopRentalContract;
    }

    static findAll(){
        return db.execute("select * from shop");
    }

    save(){
        if(this.shopID){
            return db.execute(
                'update shop set shopName=?, shopPhone=?, shopDetail=?, openingTime=?, shopType=?, payRent=?, shopRating=?, shopRentalContract=? where ShopID = ?',
                [this.shopID, this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.payRent, this.shopRating, this.shopRentalContract, this.shopID]
            );
        }else{
            return db.execute(
                'insert into shop (shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract) values(?,?,?,?,?,?)',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.shopRentalContract]
            );
        }
    }

    static findById(shopID){
        return db.execute(
            'select * from shop where shopID = ?',
            [this.shopID]
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

module.exports = shop