const User = require('../models/User')



module.exports.register = async (req, res) => {


try {
    
    console.log('Hello from register', req.body);


    await User.create(req.body)


    res.send('Hello from register')


    res.send({success: true})
} catch (error) {
    console.log("register error", error.message);

    res.send({success: false, error: error.message})
}



}

module.exports.login = (req, res) => {
    console.log('Hello from login');

    res.send('Hello from login')
}