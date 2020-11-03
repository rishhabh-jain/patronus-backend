const mongoose = require('mongoose')

const RescueSchema = new mongoose.Schema({
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
    enum: ['Dog', 'Cat' , 'Cow' , 'Buffalo' , 'Goat'],
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

module.exports = mongoose.model('Story', RescueSchema)