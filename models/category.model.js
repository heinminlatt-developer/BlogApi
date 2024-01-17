const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
