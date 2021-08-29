const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({

name :{
    type:String,
    required:true

},
description:{
    type:String,
    required:true
},
startDate:{
    type:Date,
    required:true
},
deadline:{
type:Date,
required

},
state:{
type:[String],
default:['ended','In progress','valid'],
required:true
}

})

const Task = mongoose.model('Task',taskSchema);
module.export = Task;