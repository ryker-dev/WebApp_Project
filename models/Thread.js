const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let threadSchema = new Schema ({
    threadname: {type: String},
    owner: {type: String},
    description: {type: String},
    code: {type: String},
    date: {type: Date},
    upvotes: {type: Number},
    downvotes: {type: Number}
})

module.exports = mongoose.model("threads", threadSchema);