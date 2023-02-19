const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
	uid: { type: String, required: true },
	fileUrl: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('favorite', favouriteSchema);