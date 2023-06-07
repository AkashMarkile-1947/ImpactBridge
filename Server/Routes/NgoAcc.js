const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(express.json())
router.use(cors());


router.post('/api/NGOAccCreation', async(req, res) => {
    console.log(req.body);
    console.log('hello');
    return res.json({status: 'ok'});

})

router.get('/api/NGOAccCreation', async(req, res) => {
    res.send({status: 'ok', msg: 'error'});
})

module.exports =  router
