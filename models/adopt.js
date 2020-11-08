const mongoose = require('mongoose')

const AdoptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  caption: {
    type: String,
    required: true,
  },
  animaltype : {
    type: String,
    default: 'Dog',
    enum: ['Dog', 'Cat'],
  },
  location :{
      type : String , 
      required: true 
  },
  image : {
      type : String , 
      required : true 
  },
  name : {
      type : String ,
      required : true,
      max : 50 ,    
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

module.exports = mongoose.model('Adopt', AdoptSchema)