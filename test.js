const mongoose = require('mongoose')
const BlogPost = require('./Models/BlogPost')

mongoose.connect('mongodb+srv://godtin:1234@cluster0.lpzu84z.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
/* BlogPost.create({
title : "This is first post",
body :  "This is first post content"
}).then(() => {
console.log('Insert data successfully')
}).catch(err =>{
console.log(err)
}) */

let id = "6453dc233becd6994dde7b9f" 
/* BlogPost.findById(id).then((data) => {
console.log(data)
}).catch(err =>{
console.log(err)
}) */

/* BlogPost.findByIdAndUpdate(id, {
body :  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}).then(() => {
console.log('Update data successfully')
}).catch(err =>{
console.log(err)
}) */
BlogPost.findByIdAndDelete(id).then(() => {
console.log('Delete successfully')
}).catch(err =>{
console.log(err)
})