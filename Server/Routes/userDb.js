const express = require('express');
const router = express.Router();
const USER = require('../DB/models/user');
const GatewaySchema = require("../DB/models/gatewayDetails");
const cors = require('cors');
router.use(express.json())
router.use(cors());

router.post("/api/userDashboard", async(req, res) => {
    const {loginData} = req.body;
    if(!loginData) {
        return res.json({status: "failed"});
    }
    const email = loginData["email"];
    try {
        const resp = await USER.findOne({email}).lean();
        if (!resp) {
            return res.json({status: "failed"});
        }
        const userId = resp["_id"];
        gatewayResp = await  GatewaySchema.find({userId}).lean();
        if (!gatewayResp) {
            return res.json({status: "failed"});
        }
        //console.log(gatewayResp);
        return res.json({status: "ok", data: gatewayResp});
    } catch (error) {
        return res.json({status: "failed", data: error});
    }
})


module.exports = router;