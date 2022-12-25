const mongoose = require('mongoose')

const teachers = new mongoose.Schema({
    
    teacherName:String,
    teacherDepartment:String,
    classes:[
        {
            year : String,
            subject : String
        }
    ],
    teacherqualification:String,
    teachermob:String,
    teacheremail:String,
    
})

module.exports = mongoose.model('teachers',teachers)