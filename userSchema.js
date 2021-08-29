const mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {type: String,required: true},
  lasttName: {type: String,required: true},
  image:{
    type:String,
    required:true
},
  age: Number,

  familySituation:{
      type:[String],
      default:['single','maried','divorced']},

  email:{
      type: mongoose.SchemaTypes.Email, // npm i mongoose-type-email//
      required:true,
    
  },

  password:{
      type:String,
      required:true

  },

  tel:Number,

  title:String,

  departement:{
      type:String,
      required:true
  },

  adress:{
      type:String,
      required:true
  },

  joinDate:{
      type:Date,
      default:Date.now
  },

  role:{
      type:[String],
      default:['employee','manager','admin'],
      required:true
    
    }


});

const User = mongoose.model('User', userSchema);

module.exports = User;

