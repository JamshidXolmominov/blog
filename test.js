const mongoose = require('mongoose')
const Post = require('./models/Post')

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://jamshid:SgWCPrjrqDUhCtPW@cluster0.knlntg9.mongodb.net/node-blog-test")

// Post.find({}, (err, post) => console.log(post))
// // Post.findById('63a2dc2cd6dc34e81980a77c', (err, post) => console.log(post))
// // Post.create({
// //   title: 'My second blog',
// //   description: 'My second description',
// //   content: 'Lorem ipsum second content'
// // }, (err, post) => {console.log(err, post)})

// // Post.findByIdAndUpdate("63a2dc2cd6dc34e81980a77c", {
// //   description: "It is beautufull description"
// // }, (err, post) => console.log(post))

