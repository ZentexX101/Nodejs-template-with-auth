const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		// author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		// published: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
