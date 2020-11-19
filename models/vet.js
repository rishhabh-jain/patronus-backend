const mongoose = require('mongoose')

const VetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
  },
  location : {
    type: String,
    default: 'Dog',
    enum: ['Dog', 'Cat' , 'Cow' , 'Buffalo' , 'Goat'],
  },
  pincode:{
      type : Number  , 
      required: true 
  },
  longitude : {
      type : Number , 
      required : true 
  },
  magnitude : {
      type : Number,
      required : true,   
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

module.exports = mongoose.model('Vet', VetSchema)