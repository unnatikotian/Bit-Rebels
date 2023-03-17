const mongoose = require('mongoose');

const mongoDb= async ()=>{
  await mongoose.connect('mongodb://127.0.0.1:27017/hackathonDb')
   .then(()=>(console.log('Connected!')))
   .catch((err)=>console.error(err))
}
module.exports = mongoDb
