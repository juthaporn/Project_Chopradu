const db = require('../util/database');

class user{

    constructor(userID, username, password, name, phone, status){
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.status = status;
    }

    static findAll(){
        return db.execute("select * from user");
    }

    save(){
        if(this.userID){
            return db.execute(
                'update user set username=?, password=?, name=?, phone=?, status=? where userID = ?',
                [this.userID, this.username, this.password, this.name, this.phone, this.status, this.userID]
            );
        }else{
            return db.execute(
                'insert into user (username, password, name, phone, status) values(?,?,?,?)',
                [this.username, this.password, this.name, this.phone, this.status]
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