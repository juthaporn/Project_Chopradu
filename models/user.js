const db = require('../util/database');

module.exports = class User{

    constructor(userID, userName, passWord,name,phone){
        this.userID = userID;
        this.userName = userName;
        this.passWord = passWord;
        this.name = name;
        this.phone = phone;
    }

    static findAll(){
        return db.execute("select * from user");
    }

    save(){
        if(this.userID){
            return db.execute(
                'update user set userName=?, passWord=?, name=?, phone=? where userID = ?',
                [this.userID, this.userName, this.passWord, this.name, this.phone, this.userID]
            );
        }else{
            return db.execute(
                'insert into user (userName, passWord, name, phone) values(?,?,?,?)',
                [this.userName, this.passWord, this.name, this.phone]
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