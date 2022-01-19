const db = require('../util/database');

class productType{

    constructor(typeID, typeName){
        this.typeID = typeID;
        this.typeName = typeName;
    }

    static findAll(){
        return db.execute("select * from productType");
    }

    save(){
        // console.log('...')
        if(this.typeID){
            return db.execute(
                'update productType set typeName=? where typeID = ?',
                [this.typeID, this.typeName, this.typeID]
            );
        }else{
            return db.execute(
                'insert into productType (typeName) values(?)',
                [this.typeName]
            );
        }
    }

    static findById(typeID){
        return db.execute(
            'select * from productType where typeID = ?',
            [this.typeID]
        );
    }
}

module.exports = productType