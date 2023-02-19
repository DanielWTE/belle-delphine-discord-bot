const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
	uid: { type: String, required: true },
}, { versionKey: false, timestamps: true });

export default mongoose.model('inventory', inventorySchema);