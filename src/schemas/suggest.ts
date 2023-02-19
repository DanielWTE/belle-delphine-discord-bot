const mongoose = require('mongoose');

const suggestSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	uid: { type: String, required: true },
	description: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('suggest', suggestSchema);