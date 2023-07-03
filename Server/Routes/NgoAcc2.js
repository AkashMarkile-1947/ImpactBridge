const express = require("express");
const router = express.Router();
const cors = require("cors");
const NgoDocs = require("../DB/models/ngoDocs");
router.use(express.json());
router.use(cors());

const mongoose = require('mongoose');

const NGOSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  registrationCertFile: {
    type: String,
    required: true
  },
  constitutionFile: {
    type: String,
    required: true
  },
  financialStatementsFile: {
    type: String,
    required: true
  },
  taxExemptionFile: {
    type: String,
    required: true
  },
  boardOfDirectorsFile: {
    type: String,
    required: true
  },
  projectReportsFile: {
    type: String,
    required: true
  }
});

const NGO = mongoose.model('NGO', NGOSchema);

module.exports = NGO;


router.post("/api/NGOAcc2", async(req, res) => {
    console.log("hello");
    console.log(req.body);
    try {
       /* const response = await NgoDocs.create({
            regCert,
            constiFile,
            financialStmt,
            textExemption,
            bodFile,
            projectReports
        });*/
        res.json({ status: "ok", data: "success" });
    } catch (error) {
        console.log(error);
        return res.json({ staus: "error", error: 'failed' });
    }



});

router.get("/api/NGOAcc2", async(req, res) => {
    res.send({ status: "ok", msg: "error" });
});

module.exports = router;