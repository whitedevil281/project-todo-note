import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataac = new Schema({
  email:String,
  userid: String,
  pass : String
});


export const acdata = mongoose.model('acdata', dataac);
