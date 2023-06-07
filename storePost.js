const BlogPost = require('../Models/BlogPost')
const path = require('path')

module.exports = (req, res) =>{
    let image = req.files.image;
image.mv(path.resolve(__dirname, '..', 'public/assets/img', image.name), async() =>{
    await BlogPost.create({
    ...req.body,
    image: '/img/' + image.name
}).then(() =>{
        console.log('Data inserted successfully')
        res.redirect('/')
    }).catch(err =>{
        console.log(err)
    })
})
}