const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Campaign title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Campaign description is required"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    owner: {
      type: String,
      required: [true, "Owner address is required"],
    },
    goal: {
      type: Number,
      required: [true, "Goal amount is required"],
      min: [0, "Goal must be positive"],
    },
    amountCollected: {
      type: Number,
      default: 0,
      min: [0, "Amount collected must be positive"],
    },
    deadline: {
      type: Date,
      required: [true, "Deadline is required"],
    },
    image: {
      type: String,
      default: "",
    },
    contractAddress: {
      type: String,
      required: [true, "Contract address is required"],
      unique: true,
    },
    category: {
      type: String,
      enum: ["technology", "health", "education", "environment", "community", "other"],
      default: "other",
    },
    backers: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
campaignSchema.index({ owner: 1, createdAt: -1 });
campaignSchema.index({ contractAddress: 1 });
campaignSchema.index({ isActive: 1, deadline: 1 });

module.exports = mongoose.model("Campaign", campaignSchema);