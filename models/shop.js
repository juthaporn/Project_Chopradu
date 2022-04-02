const db = require('../util/database');

class shop{

    constructor(shopID, shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract, memberID){
        this.shopID =shopID;
        this.shopName = shopName;
        this.shopPhone = shopPhone;
        this.shopDetail = shopDetail;
        this.openingTime = openingTime;
        this.shopType = shopType;
        this.shopRentalContract = shopRentalContract;
        this.memberID = memberID;
    }

    static findAll(){
        return db.execute("select * from shop join member on shop.memberID = member.memberID");
    }

    save(){
        if(this.shopID){
            return db.execute(
                'update shop set shopName=?, shopPhone=?, shopDetail=?, openingTime=?, shopType=?, shopRentalContract=?, memberID=? where shopID=?',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.shopRentalContract, this.memberID, this.shopID]
            );
        }else{
            return db.execute(
                'insert into shop (shopName, shopPhone, shopDetail, openingTime, shopType, shopRentalContract,  memberID) values(?,?,?,?,?,?,?)',
                [this.shopName, this.shopPhone, this.shopDetail, this.openingTime, this.shopType, this.shopRentalContract, this.memberID]
            );
        }
    }

    static findById(shopID){
        return db.execute(
            'select * from shop where shopID = ? join member on shop.memberID = member.memberID',
            [shopID]
        );
    }

    // delete shopID
    static delById(shopID){
        return db.execute(
            'delete from shop where shopID = ? ',
            [shopID]
        );
    }
}

module.exports = shop