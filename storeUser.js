const User = require('../Models/User')

module.exports = (req, res) =>{
    User.create(req.body).then(() => {
        console.log("User registered successfully!")
        res.redirect('/')
    }).catch((error) => {   
        if (error) {
            return res.redirect('/auth/register')
        }
    })

}