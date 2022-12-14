const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let threadSchema = new Schema ({
    threadname: {type: String},
    owner: {type: String, default: "Anonymous"},
    description: {type: String},
    code: {type: String},
    date: {type: Date},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0}
})

module.exports = mongoose.model("threads", threadSchema);