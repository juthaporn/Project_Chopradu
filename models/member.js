const db = require('../util/database');

module.exports = class Member{

    constructor(memberID, memberName, memberPhone){
        this.memberID = memberID;
        this.memberName = memberName;
        this.memberPhone = memberPhone;
    }

    static findAll(){
        return db.execute("select * from member");
    }

    save(){
        if(this.memberID){
            return db.execute(
                'update member set memberName=?, memberPhone=? where memberID = ?',
                [this.memberID, this.memberName, this.memberPhone, this.memberID]
            );
        }else{
            return db.execute(
                'insert into member (memberName, memberPhone) values(?,?)',
                [this.memberName, this.memberPhone]
            );
        }
    }

    static findById(memberID){
        return db.execute(
            'select * from user where memberID = ?',
            [this.memberID]
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