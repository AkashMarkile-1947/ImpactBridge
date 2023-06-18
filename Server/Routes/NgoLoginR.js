const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");
const NgoDetails = require("../DB/models/ngoDetails");
router.use(express.json());
router.use(cors());

router.post('/api/ngo-login', async(req, res) => {
    let {email, password} = req.body;
    console.log(email, password);
    try {
        const ngo = await NgoDetails.findOne({contactNGOEmail: email}).lean();
        console.log(ngo);

        if (!ngo) {
            return res.json({status: 'error', error: 'Invalid username or password'})
        }
        //comp(password, user.password);
        if (await bcrypt.compare(password, ngo.password)) {
            //correct password
            return res.json({status: 'ok', email: email});
        } else {
            return  res.json({status: 'error', error: 'Invalid username or password'});
        }
    } catch (err) {
        //console.error(JSON.stringify(err));
        return  res.json({status: 'error', error: 'Invalid username or password'});
    }    
})

module.exports = router;