const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    desctiption: String,
    image: String,
    link: String,

});

const Book = mongoose.model("Book",bookSchema);

export default Book;