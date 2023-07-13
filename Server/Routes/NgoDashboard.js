const express = require('express');
const router = express.Router();
const USER = require('../DB/models/user');
const GatewaySchema = require("../DB/models/gatewayDetails");
const cors = require('cors');
router.use(express.json())
router.use(cors());

router.post("/api/NGODashboard", async(req, res) => {
    const {NGOName} = req.body;
    if(!NGOName) {
        return res.json({status: "failed"});
    }
    try {
        gatewayResp = await  GatewaySchema.find({NGOName}).lean();
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