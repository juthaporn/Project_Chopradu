const db = require('../util/database');

module.exports = class Shop{

    constructor(ShopID, ShopName, ShopPhone, shopDetail, OpeningTime, ShopType, payRent, shopRating, shopRentalContract, ownerID){
        this.ShopID = ShopID;
        this.ShopName = ShopName;
        this.memberPhone = memberPhone;
        this.ShopPhone = ShopPhone;
        this.shopDetail = shopDetail;
        this.OpeningTime = OpeningTime;
        this.ShopType = ShopType;
        this.payRent = payRent;
        this.shopRating = shopRating;
        this.shopRentalContract = shopRentalContract;
        this.ownerID = ownerID;
    }

    static findAll(){
        return db.execute("select * from shop");
    }

    save(){
        if(this.ShopID){
            return db.execute(
                'update shop set ShopName=?, ShopPhone=?, shopDetail=?, OpeningTime=?, ShopType=?, payRent=?, shopRating=?, shopRentalContract=?, ownerID=? where ShopID = ?',
                [this.ShopID, this.ShopName, this.ShopPhone, this.shopDetail, this.OpeningTime, this.ShopType, this.payRent, this.shopRating, this.shopRentalContract, this.ownerID, this.ShopID]
            );
        }else{
            return db.execute(
                'insert into shop (ShopName, ShopPhone, shopDetail, OpeningTime, ShopType, payRent, shopRating, shopRentalContract, ownerID) values(?,?,?,?,?,?,?,?,?)',
                [this.ShopName, this.ShopPhone, this.shopDetail, this.OpeningTime, this.ShopType, this.payRent, this.shopRating, this.shopRentalContract, this.ownerID]
            );
        }
    }

    static findById(ShopID){
        return db.execute(
            'select * from user where ShopID = ?',
            [this.ShopID]
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