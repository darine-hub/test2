const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema ({

   dateReservation :{
      type:Date,
      required:true

   },

   user:{
    type:Schema.Types.ObjectId,
     ref:'User',
     required:true
   },

   salle:{
     type:Schema.Types.ObjectId,
     ref:'Salle',
     required:true  
   }

})

const Reservation = mongoose.model('Reservation',reservationSchema);
module.export = 'Reservation';