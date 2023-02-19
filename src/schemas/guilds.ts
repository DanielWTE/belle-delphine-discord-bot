const mongoose = require('mongoose');

const guildsSchema = new mongoose.Schema({
	gid: { type: String, required: true },
    premiumFeatures: { type: String, default: "off", required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('guilds', guildsSchema);