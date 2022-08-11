const mongoose = require("mongoose");
//mongoose model 
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
   //obj:
   createdAt: {
    type: Date,
    default: new Date(),
},
  likedMovies: Array,
});

module.exports = mongoose.model("users", userSchema);
