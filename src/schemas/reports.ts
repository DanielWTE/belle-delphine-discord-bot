const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
	mediaID: { type: String, required: true },
	message: { type: String, required: true },
	reason: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('report', reportsSchema);