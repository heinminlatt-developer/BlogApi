const mongoose = require("mongoose");
const role = require("../constants/role");
const { userStatus } = require("../constants/status");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone_number: {
      type: String,
    },

    role: {
      type: String,
      require: true,
      default: role.user,
      enum: [role.user, role.admin],
    },
    status: {
      type: String,
      require: true,
      default: userStatus.suspended,
      enum: [userStatus.active, userStatus.suspended],
    },
    desctription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
