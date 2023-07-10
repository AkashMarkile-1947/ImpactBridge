const express = require("express");
const router = express.Router();
const gatewayDetails = require("../DB/models/gatewayDetails");

router.post('/api/monthlyMission', async (req, res) => {
  const Missions = req.body.Mission;

  try {
    const countPromises = Missions.map(async (mission) => {
      const count = await gatewayDetails.countDocuments({ Mission: mission });
      return { mission, count };
    });

    const missionCounts = await Promise.all(countPromises);

    return res.json({ status: 'ok', data: missionCounts});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', data: 'Internal server error' });
  }
});


module.exports = router;
