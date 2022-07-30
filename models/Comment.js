const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    threadId: {type: mongoose.ObjectId},
    owner: {type: String, default: "Anonymous"},
    text: {type: String},
    date: {type: Date},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0}
})

module.exports = mongoose.model("comments", commentSchema);