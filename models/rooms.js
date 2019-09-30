const mongoose = require('mongoose');


const rooms = mongoose.Schema({
    roomName: String,
    userCount: Number,
    created: Date



})



module.exports = mongoose.model("rooms", rooms)