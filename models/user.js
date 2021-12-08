const db = require('../util/database');

module.exports = class User{

    constructor(userID, userName, passWord, loginStatus, memberID, adminID, ownerID){
        this.userID = userID;
        this.userName = userName;
        this.passWord = passWord;
        this.loginStatus = loginStatus;
        this.memberID = memberID;
        this.adminID = adminID;
        this.ownerID = ownerID;
    }

    static findAll(){
        return db.execute("select * from user");
    }

    save(){
        if(this.userID){
            return db.execute(
                'update user set userName=?, passWord=?, loginStatus=?, memberID=?, adminID=?, ownerID=? where userID = ?',
                [this.userID, this.userName, this.passWord, this.loginStatus, this.memberID, this.adminID, this.ownerID, this.userID]
            );
        }else{
            return db.execute(
                'insert into member (userName, passWord, loginStatus, memberID, adminID, ownerID) values(?,?,?,?,?,?)',
                [this.userName, this.passWord, this.loginStatus, this.memberID, this.adminID, this.ownerID]
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