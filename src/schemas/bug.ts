const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	uid: { type: String, required: true },
	description: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('bug', bugSchema);