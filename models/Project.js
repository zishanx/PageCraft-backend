const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema({
    templateId:{type:String,required:true},
    content:{type:Object,required:true},
    createdAt:{type:Date, default: Date.now, expires: '1d'}
})

const Template = new mongoose.model('Template',templateSchema)

module.exports = Template