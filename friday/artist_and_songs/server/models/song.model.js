const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    title : {
        type: String, 
        required : [true, "{PATH} is required"],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },
    youtubeMedia: {
        type: String,
        required : [true, "{PATH} is required"]
    },
    above330: {
        type: Boolean,
        default: false
    },
}, {timestamps: true}); // adds createdAt and updatedAt.


const Song = mongoose.model("Song", SongSchema);

module.exports = Song