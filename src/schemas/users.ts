const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
	uid: { type: String, required: true },
    balance: { type: Number, required: true },
    premiumLevel: { type: String, default: "none", required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('users', usersSchema);