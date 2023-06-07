const express = require('express')
const app = express ()
const ejs = require('ejs')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')


const validateMiddleWare = require('./middleware/validationMiddleware')

mongoose.connect('mongodb+srv://godtin:1234@cluster0.lpzu84z.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store', validateMiddleWare)
app.set('view engine', 'ejs')

/* app.get('/', (req,res) => {
    res.render('index')
}) */
/* app.get('/', async (req,res) => {
    const blogposts = await BlogPost.find({})
    res.render('index', {
        blogposts : blogposts
    })
}) */

app.get('/', homeController)
app.get('/about', aboutController)
app.get('/contact', contactController)
app.get('/post/:id', getPostController)

/* app.get('/posts/new', (req,res) =>{
    res.render('create')
}) */
app.get('/posts/new', newPostController)
app.get('/auth/register', newUserController)
/* app.post('/posts/store', (req,res) =>{
    console.log(res.body)
    res.redirect('/')

let image = req.files.image;
image.mv(path.resolve(__dirname, 'public/assets/img', image.name), async() =>{
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


}) */

app.post('/posts/store', storePostController)
app.post('/users/register', storeUserController)

app.listen(4000, () => {
    console.log("App listening on port 4000")
})