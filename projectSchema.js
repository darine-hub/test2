const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const projectShema = new Schema({
 name:{
     type:String,
     required:true
 },
 description:String,
 startDate:{
     type:Date,
     required:true
 },
 deadLine:{
     type:Date,
     required:true,
 },
 state:{
     type:String,
     required:true
 },




});
const Project = mongoose.model ('Project',projectSchema);
module.export= Project;