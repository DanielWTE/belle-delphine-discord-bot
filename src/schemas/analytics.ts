const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
	uid: { type: String, required: true },
	gid: { type: String, required: true },
	command: { type: String, required: true },
	uLocale: { type: String, required: true },
	gLocale: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('analytics', analyticsSchema);