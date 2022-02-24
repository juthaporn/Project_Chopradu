const db = require('../util/database');

module.exports = class Rent{

    constructor(rentalID, rentalDetail, waterBill, electricityBill, cleaningFee, wasteDisposalFee){
        this.rentalID = rentalID;
        this.rentalDetail = rentalDetail;
        this.waterBill = waterBill;
        this.electricityBill = electricityBill;
        this.cleaningFee = cleaningFee;
        this.wasteDisposalFee = wasteDisposalFee;
    }

    static findAll(){
        return db.execute("select * from monthlyRentalFee");
    }

    save(){
        if(this.rentalID){
            return db.execute(
                'update monthlyRentalFee set rentalDetail=?, waterBill=?, electricityBill=?, cleaningFee=?, wasteDisposalFee=? where rentalID = ?',
                [this.rentalID, this.rentalDetail, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee, this.rentalID]
            );
        }else{
            return db.execute(
                'insert into monthlyRentalFee (rentalDetail, waterBill, electricityBill, cleaningFee, wasteDisposalFee) values(?,?,?,?,?)',
                [this.rentalDetail, this.waterBill, this.electricityBill, this.cleaningFee, this.wasteDisposalFee]
            );
        }
    }

    static findById(rentalID){
        return db.execute(
            'select * from monthlyRentalFee where rentalID= ?',
            [this.rentalID]
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