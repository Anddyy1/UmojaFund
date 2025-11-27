const express = require('express');
const router = express.Router();

const {
  createCampaign,
  getAllCampaigns,
  getCampaign,
  updateCampaign,
  deleteCampaign,
  donateToCampaign,
  approveCampaign,   // <-- ADDED
  rejectCampaign,    // <-- ADDED
} = require('../controllers/campaignController');

const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware'); // <-- ADDED

// --------------------------------------
// PUBLIC ROUTES
// --------------------------------------
router.get('/', getAllCampaigns);           // GET /api/campaigns
router.get('/:id', getCampaign);            // GET /api/campaigns/:id

// --------------------------------------
// PROTECTED ROUTES (Logged-in users only)
// --------------------------------------
router.post('/', protect, createCampaign);            // Create campaign
router.put('/:id', protect, updateCampaign);          // Update campaign
router.delete('/:id', protect, deleteCampaign);       // Delete campaign
router.post('/:id/donate', protect, donateToCampaign); // Donate

// --------------------------------------
// ADMIN ROUTES
// --------------------------------------
router.put('/:id/approve', protect, adminOnly, approveCampaign); // Approve campaign
router.put('/:id/reject', protect, adminOnly, rejectCampaign);   // Reject campaign

module.exports = router;
