const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");
const NgoRequested = require("../DB/models/ngoRequested");
router.use(express.json());
router.use(cors());

router.post("/api/NGOAccCreation", async (req, res) => {
  let {
    organizationName,
    organizationType,
    contactPersonName,
    contactNGOEmail,
    contactPersonPhone,
    organizationWebsite,
    missionStatement,
    activitiesDescription,
    geographicFocus,
    targetBeneficiaryGroups,
    registrationNumber,
    socialMediaLinks,
    password,
  } = req.body;
  if (password.length < 8) {
    return res.json({
      status: "error",
      error: "invalid password length, should bee at least 8 charcters",
    });
  }
  try {
    password = await bcrypt.hash(password, 10);
    const response = await NgoRequested.create({
      organizationName,
      organizationType,
      contactPersonName,
      contactNGOEmail,
      contactPersonPhone,
      organizationWebsite,
      missionStatement,
      activitiesDescription,
      geographicFocus,
      targetBeneficiaryGroups,
      registrationNumber,
      socialMediaLinks,
      password,
      isBlocked: false
    });
    res.json({ status: "ok", data: "success" });
  } catch (error) {
    console.log(error);
    if ((error.code = 11000)) {
      return res.json({ staus: "error", error: 'failed' });
    }
    throw error;
  }
});

router.get("/api/NGOAccCreation", async (req, res) => {
  res.send({ status: "ok", msg: "error" });
});

module.exports = router;
