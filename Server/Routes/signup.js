const express = require('express');
const router = express.Router();
const USER = require('../DB/models/user');
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(express.json())
router.use(cors());



router.post('/api/signup', async(req, res) => {
    let {email, password, dateofbirth, contact, firstname, lastname, } = req.body;
    try {
        password = await bcrypt.hash(password, 10);
        const response = await USER.create({
            email, password, dateofbirth, contact, firstname, lastname, isAdmin: false
        });
        if (response) {
            return res.json({status: 'ok', msg:  'success'});
        } else {
            return res.json({status: 'error', error: 'user creation failed'});
        }
    } catch(error) {
        console.log(error);
        if (error.code = 11000) {
            return res.json({status: 'error', error: 'user creation failed'});
        }
    }
});

router.post('/api/AdminSignup', async(req, res) => {
    let {email, password, dateofbirth, contact, firstname, lastname, } = req.body;
    try {
        password = await bcrypt.hash(password, 10);
        const response = await USER.create({
            email, password, dateofbirth, contact, firstname, lastname, isAdmin: false
        });
        if (response) {
            return res.json({status: 'ok', msg:  'success'});
        } else {
            return res.json({status: 'error', error: 'user creation failed'});
        }
    } catch(error) {
        console.log(error);
        if (error.code = 11000) {
            return res.json({status: 'error', error: 'user creation failed'});
        }
    }
});

module.exports = router;
