import mongoose, { model } from 'mongoose';

const transactionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default model('Transaction', transactionSchema);
