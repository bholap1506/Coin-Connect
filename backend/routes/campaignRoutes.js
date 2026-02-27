const express = require("express");
const router = express.Router();
const {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");

// Route: /api/campaigns
router.route("/").get(getAllCampaigns).post(createCampaign);

// Route: /api/campaigns/:id
router.route("/:id").get(getCampaignById).put(updateCampaign).delete(deleteCampaign);

module.exports = router;