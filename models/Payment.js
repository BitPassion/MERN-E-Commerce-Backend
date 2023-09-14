const mongoose = require('mongoose');
const { Schema } = mongoose;
const PaymentSchema = new Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.model("payment", PaymentSchema)