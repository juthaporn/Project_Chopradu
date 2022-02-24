const db = require('../util/database');

class member{

    constructor(memberID, username, password, name, phone, status){
        this.memberID = memberID;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.status = status;
    }

    static findAll(){
        return db.execute("select * from member");
    }

    save(){
        if(this.memberID){
            return db.execute(
                'update member set username=?, password=?, name=?, phone=?, status=? where memberID = ?',
                [this.memberID, this.username, this.password, this.name, this.phone, this.status, this.memberID]
            );
        }else{
            return db.execute(
                'insert into user (username, password, name, phone, status) values(?,?,?,?)',
                [this.username, this.password, this.name, this.phone, this.status]
            );
        }
    }

    static findById(memberID){
        return db.execute(
            'select * from member where memberID = ?',
            [this.memberID]
        );
    }

}

module.exports = member