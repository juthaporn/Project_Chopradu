const Member = require('../models/Member')

exports.getAllMember = (req, res, next) => {
    Member.findAll().then(member => {
        res.status(200).json({
            "message": "success",
            "data": member
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}

exports.createMember = (req, res, next) => {
    console.log(req.body)
    const {username, password, name, phone, roleID} = req.body
    const member = new Member (null, username, password, name, phone, roleID)
    member.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(200).json({
            "message": err
        })
    })
}

exports.getOneMember = (req, res, next) => {
    const {memberID} = req.params
    Member.findById(memberID).then(member => {
        res.status(200).json({
            "message": "success",
            "data": member[0]
        });
    }).catch(err => {
        res.status(500).json({
            "message": err
        })
    })
}

exports.editMember = (req, res, next) => {
    console.log(req.body)
    const {memberID ,username, password, name, phone, roleID} = req.body
    const member = new Member (memberID, username, password, name, phone, roleID)
    
    member.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(200).json({
            "message": err,
            "result": false
        })
    })
}

exports.deleteMember = (req, res, next) => {
    const {memberID} = req.params;
    Member.delById(memberID).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch(err => {
        res.status(500).json({
            "message": err,
            "result": false
        })
    })
}