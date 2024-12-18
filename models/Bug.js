import mongoose from "mongoose";

const BugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Bug title is required"],
    },
    description: {
      type: String,
      required: [true, "Bug description is required"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.models.Bug || mongoose.model("Bug", BugSchema);
