const Campaign = require('../models/Campaign');

// @desc Create new campaign
// @route POST /api/campaigns
// @access Private (user)
exports.createCampaign = async (req, res) => {
  try {
    const { title, description, category, targetAmount, imageUrl, tags } = req.body;

    const campaign = await Campaign.create({
      title,
      description,
      category,
      targetAmount,
      imageUrl,
      tags,
      creator: req.user._id,
    });

    res.status(201).json(campaign);
  } catch (error) {
    console.error('Create Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get all campaigns
// @route GET /api/campaigns
// @access Public
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find()
      .sort({ createdAt: -1 })
      .populate('creator', 'name email')
      .populate('donations.donor', 'name email');

    res.json(campaigns);
  } catch (error) {
    console.error('Get All Campaigns Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get single campaign
// @route GET /api/campaigns/:id
// @access Public
exports.getCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id)
      .populate('creator', 'name email')
      .populate('donations.donor', 'name email');

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    res.json(campaign);
  } catch (error) {
    console.error('Get Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Update a campaign
// @route PUT /api/campaigns/:id
// @access Private (owner)
exports.updateCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    if (campaign.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    Object.assign(campaign, req.body);
    const updated = await campaign.save();

    res.json(updated);
  } catch (error) {
    console.error('Update Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Delete a campaign
// @route DELETE /api/campaigns/:id
// @access Private (owner)
exports.deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    if (campaign.creator.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await campaign.deleteOne();

    res.json({ message: 'Campaign removed' });
  } catch (error) {
    console.error('Delete Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Donate to a campaign
// @route POST /api/campaigns/:id/donate
// @access Private (user)
exports.donateToCampaign = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Donation amount must be greater than 0' });
    }

    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.raisedAmount += amount;

    campaign.donations.push({
      amount,
      donor: req.user._id,
      date: new Date(),
    });

    const updatedCampaign = await campaign.save();

    res.json({
      message: 'Donation successful',
      campaign: updatedCampaign,
    });
  } catch (error) {
    console.error('Donate Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ===============================
// ADMIN FUNCTIONS
// ===============================

// @desc Approve a campaign
// @route PUT /api/campaigns/:id/approve
// @access Private (admin)
exports.approveCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.status = 'approved';
    await campaign.save();

    res.json({ message: 'Campaign approved', campaign });
  } catch (error) {
    console.error('Approve Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Reject a campaign
// @route PUT /api/campaigns/:id/reject
// @access Private (admin)
exports.rejectCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.status = 'rejected';
    await campaign.save();

    res.json({ message: 'Campaign rejected', campaign });
  } catch (error) {
    console.error('Reject Campaign Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
