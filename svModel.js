const mongoose = require('mongoose');
const SinhVienSchema = new mongoose.Schema({
    Ten: {
        type: String,
        required: true
    },
    Tuoi: {
        type: Number,
    },
    Diachi: {
        type: String
    }
});
const SinhVienModel = mongoose.model("user", SinhVienSchema);
module.exports = SinhVienModel;