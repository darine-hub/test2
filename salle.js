const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const salleSchema = new Schema ({

numero:{
    type:Number,
    required:true
},
capacity:{
    type:Number,
    required:true
}


})
 const Salle  = mongoose.model ('Salle',salleSchema);
 module.export= 'Salle';