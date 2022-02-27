const db = require('../util/database');

module.exports = class Rent{

    constructor(rentalID, rentDetail, waterBill, electricityBill, cleaningFee, wasteDisposalFee, shopID){
        this.rentalID = rentalID;
        this.rentDetail = rentDetail;
        this.waterBill = waterBill;
        this.electricityBill = electricityBill;
        this.cleaningFee = cleaningFee;
        this.wasteDisposalFee = wasteDisposalFee;
        this.shopID = shopID;
    }

    static findAll(){
        return db.execute("select * from monthlyRentalFee");
    }

    save(){
        if(this.rentalID){
            return db.execute(
                'update monthlyRentalFee set rentalDetail=?, waterBill=?, electricityBill=?, cleaningFee=?, wasteDisposalFee=?, shopID=? where rentalID = ?',
                [this.rentalID, this.rentDetail, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee, this.shopID, this.rentalID]
            );
        }else{
            return db.execute(
               'insert into monthlyRentalFee (rentDetail, waterBill, electricityBill, cleaningFee, wasteDisposalFee, shopID) values(?,?,?,?,?,?)',
               [this.rentDetail, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee, this.shopID]
            );
        }
    }

    static findById(rentalID){
        return db.execute(
            'select * from monthlyRentalFee where rentalID= ?',
            [rentalID]
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