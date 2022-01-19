const db = require('../util/database');

class user{

    constructor(userID, username, password, name, phone){
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

}

module.exports = user