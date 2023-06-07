const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const USER = require('../DB/models/user');
router.use(express.json())
router.use(cors());

router.post('/api/login', async(req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    try {
        const user = await USER.findOne({email}).lean();
        console.log(user);

        if (!user) {
            return res.json({status: 'error', error: 'Invalid username or password'})
        }
        if (await bcrypt.compare(password, user.password)) {
            //correct password
            if (user.hasOwnProperty("isAdmin")) {
                return res.json({status: 'ok', email: email, isAdmin: true})
            } else {
                return res.json({status: 'ok', email: email, isAdmin: false})
            }
        } else {
            return  res.json({status: 'error', error: 'Invalid username or password'});
        }
    } catch (err) {
        return  res.json({status: 'error', error: 'Invalid username or password'});
    }    
});

module.exports = router;
