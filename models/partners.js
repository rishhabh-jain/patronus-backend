const mongoose = require('mongoose')

const PartnerSchema = new mongoose.Schema({
  ngoname: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    max : 50
  },
  pincode : {
     type : Number , 
     min : 6 ,
     required : true 
  },
  number : {
    type : Number , 
    min : 10 ,
    required : true 
 },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Partners', PartnerSchema)