const BlogPost = require('../Models/BlogPost')

module.exports = async(req,res) =>{
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    })
}