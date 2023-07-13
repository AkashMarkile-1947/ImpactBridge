const express = require('express');
const router = express.Router();
const USER = require('../DB/models/user');
const GatewaySchema = require("../DB/models/gatewayDetails");
const NgoDetails = require("../DB/models/ngoDetails");
const NgoRequested = require("../DB/models/ngoRequested");
const cors = require('cors');
router.use(express.json())
router.use(cors());

router.get("/api/AdminDashboard", async(req, res) => {
    try {
        gatewayResp = await  GatewaySchema.find().lean();
        if (!gatewayResp) {
            return res.json({status: "failed", data: "failed to load data"});
        }
        //console.log(gatewayResp);
        return res.json({status: "ok", data: gatewayResp});
    } catch (error) {
        return res.json({status: "failed", data: error});
    }
})

router.get("/api/manageNGOlist", async(req, res) => {
    //console.log("hello");
    try {
        const ngoList = await NgoDetails.find().lean();
        if (!ngoList) {
            return res.json({status:  "failed", data: "failed to fetch ngo records"});
        }
        return res.json({status: "ok", data: ngoList});
    } catch (error) {
        return res.json({status: "failed", data: error});
    }
})

router.get("/api/RequestedNGO", async(req, res) => {

    try {
        const requestedNGO = await NgoRequested.find().lean();
        //console.log(requestedNGO);
        if (!requestedNGO) {
            return res.json({status:  "failed", data: "failed to fetch requested ngo ngo records"});
        }
        return res.json({status: "ok", data: requestedNGO});
    } catch (error) {
        return res.json({status: "failed", data: error});
    }

})

router.post("/api/removeNGO", async (req, res) => {
    try {
      const { ngo } = req.body;
      //
console.log(ngo.organizationName);
  
      // Check if the NGO record exists before attempting to delete
      const existingRecord = await NgoDetails.findOne({ organizationName: ngo.organizationName });
      if (!existingRecord) {
        return res.json({ status: "failed", data: "NGO record not found" });
      }
      //console.log(existingRecord);
      const response = await NgoDetails.deleteOne({ organizationName: ngo.organizationName });
      if (response.deletedCount === 0) {
        return res.json({ status: "failed", data: "Failed to delete the NGO" });
      }
  
      res.json({ status: "ok", data: "NGO successfully deleted" });
    } catch (error) {
      return res.json({ status: "failed", data: "Operation failed due to internal error" });
    }
  });
  

  router.post("/api/approveReqNGO", async(req,res) => {
    const {organizationName} = req.body;
    //console.log(organizationName);
    try {
        const existingRecord = await NgoRequested.findOne({ organizationName});
        if (!existingRecord) {
            return res.json({ status: "failed", data: "Requested NGO record not found" });
        }
        //console.log(existingRecord);
        const response  = await NgoDetails.create({...existingRecord.toObject()});
        if (!response) {
            return res.json({status: "failed", data: "couldn't approve requested NGO"});
        }
        //console.log(response);
        const deleteFromRDb = await NgoRequested.deleteOne({organizationName});
        if (!deleteFromRDb) {
            return res.json({status: "ok", data: "couldn't remove from the requested ngo db"})
        }
        return res.json({status: "ok", data: "reuested NGO approved"});
    } catch (error) {
        return res.json({ status: "failed", data: "Operation failed due to internal error" });
    }
  })



router.post("/api/rejectReqNGO", async(req, res) => {
    try {
        const { organizationName } = req.body;
        // Check if the NGO record exists before attempting to delete
        const existingRecord = await NgoRequested.findOne({ organizationName});
        if (!existingRecord) {
          return res.json({ status: "failed", data: "NGO record not found" });
        }
       // console.log(existingRecord);
        const response = await NgoRequested.deleteOne({ organizationName});
        if (response.deletedCount === 0) {
          return res.json({ status: "failed", data: "Failed to delete the NGO" });
        }
    
        return res.json({ status: "ok", data: "NGO successfully deleted" });
      } catch (error) {
        return res.json({ status: "failed", data: "Operation failed due to internal error" });
      }
});

router.post("/api/blockNGO", async (req, res) => {
    try {
        const { organizationName } = req.body;
        const existingRecord = await NgoDetails.findOne({ organizationName });

        if (!existingRecord) {
            return res.json({ status: "failed", data: "NGO not found" });
        }

        const updatedValue = !existingRecord.isBlocked;
        existingRecord.isBlocked = updatedValue;
        await existingRecord.save();

        return res.json({ status: "ok", data: "Action successfully taken" });
    } catch (error) {
        return res.json({ status: "failed", data: "Action failed due to internal error" });
    }
});


module.exports = router;