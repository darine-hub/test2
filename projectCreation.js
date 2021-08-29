const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const projectCreationSchema = new Schema ({

    dateCreation:{
        type:date,
        required:true
    },

    manager:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true},
    
    project:{
        type:Schema.Types.ObjectId,
        ref:'Project',
        required:true
    } , 
    
    taskOwner:{
       task: {type:Schema.Types.ObjectId,
        ref:'Task',
        required:true},
        
       owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
 }
        


    }


});

const ProjectCreation = mongoose.model('ProjectCreation',projectCreationSchema);
module.export ='ProjectCreation';