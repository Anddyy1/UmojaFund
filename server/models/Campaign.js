const mongoose = require('mongoose');

// --- Donation Subschema ---
const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

// --- Campaign Schema ---
const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
    },
    raisedAmount: {
      type: Number,
      default: 0,
    },

    // ✅ Newly added here:
    fundingType: {
      type: String,
      enum: ['one-time', 'recurring'],
      default: 'one-time',
    },

    imageUrl: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    donations: [donationSchema], // <-- donations array
  },
  { timestamps: true }
);

module.exports = mongoose.model('Campaign', campaignSchema);
