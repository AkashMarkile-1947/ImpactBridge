const express = require("express");
const router = express.Router();
const GatewaySchema = require("../DB/models/gatewayDetails");
const USER = require("../DB/models/user");
const bcrypt = require("bcrypt");
const cors = require("cors");

router.use(express.json());
router.use(cors());

router.post("/api/transaction", async (req, res) => {
  const {
    cardNumber,
    expiryDate,
    cardPassword,
    cvv,
    cardHolder,
    modeOfTransaction,
    Mission,
    ammount,
    userEmail,
  } = req.body; // userId, timestamp
  try {
    const authResp = await USER.findOne({ email: userEmail }).lean();
    console.log(authResp);

    if (authResp) {
      if (await bcrypt.compare(cardPassword, authResp.password)) {
        const date = new Date();
        const d = date.toISOString();
        const userId = authResp._id;
        const response = await GatewaySchema.create({
          cardHolder,
          cardNo: cardNumber,
          expiryDate,
          modeOfTransaction,
          Mission,
          ammount,
          userId,
          timestamp: d,
        });
        console.log(response);
        if (!response) {
          return res.json({ status: "failed", data: "transaction failed" });
        }
        return res.json({ status: "ok", data: "success" });
      } else {
        return res.json({ status: "failed", data: "authentication failed" });
      }
    }
    return res.json({ status: "failed", data: "NGO is not registered" });
  } catch (error) {
    return res.json({ status: "failed", data: "internal server error" });
  }
});

router.get("/api/transaction", async (req, res) => {
  res.send("hello world");
});

module.exports = router;
