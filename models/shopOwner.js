const db = require('../util/database');

module.exports = class ShopOwner{

    constructor(ownerID, ownerName, ownerPhone){
        this.ownerID = ownerID;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
    }

    static findAll(){
        return db.execute("select * from shopOwner");
    }

    save(){
        if(this.ownerID){
            return db.execute(
                'update shopOwner set ownerName=?, ownerPhone=? where ownerID = ?',
                [this.ownerID, this.ownerName, this.ownerPhone, this.ownerID]
            );
        }else{
            return db.execute(
                'insert into shopOwner (ownerName, ownerPhone) values(?,?)',
                [this.ownerName, this.ownerPhone]
            );
        }
    }

    static findById(ownerID){
        return db.execute(
            'select * from shopOwner where ownerID = ?',
            [this.ownerID]
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