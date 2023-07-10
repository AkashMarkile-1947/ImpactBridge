const express = require("express");
const router = express.Router();
const cors = require("cors");
const NgoDocs = require("../DB/models/ngoDocs");
const multer = require("multer");
router.use(express.json());
router.use(cors());

const upload = multer({ dest: 'uploads/' });

router.post("/api/NGOAcc2", upload.array('files'),  async(req, res) => {
    try {
    const ngoData = JSON.parse(req.body.ngoData);
    const files = req.files;

    // Save the ngoData and files to the database
    // Implement your database logic here

    res.status(200).json({ status: 'ok', message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'An error occurred' });
  }
});

router.get("/api/NGOAcc2", async(req, res) => {
    res.send({ status: "ok", msg: "error" });
});

module.exports = router;