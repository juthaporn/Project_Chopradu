const db = require('../util/database');

module.exports = class User{

    constructor(userID, username, password,name,phone){
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
    }

    static findAll(){
        return db.execute("select * from user");
    }

    save(){
        if(this.userID){
            return db.execute(
                'update user set username=?, password=?, name=?, phone=? where userID = ?',
                [this.userID, this.username, this.password, this.name, this.phone, this.userID]
            );
        }else{
            return db.execute(
                'insert into user (username, password, name, phone) values(?,?,?,?)',
                [this.username, this.password, this.name, this.phone]
            );
        }
    }

    static findById(userID){
        return db.execute(
            'select * from user where userID = ?',
            [this.userID]
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