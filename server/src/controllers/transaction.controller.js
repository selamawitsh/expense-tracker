import transactionModel from "../models/transaction.model.js";


const getTransactions = async (req, res) => {
    try {
        const transactions = await transactionModel.find({ user: req.user._id }).sort({ date: -1 });
        res.status(200).json({
            message: "Transactions fetched successfully",
            transactions,
        });     
} catch (error) {
        res.status(500).json({
            message: "Error fetching transactions",
            error: error.message,
        });
    }
};


const addtransaction = async (req,res) =>{
    try {
        const {title, category, amount, date, user} = req.body;
        const transaction = new transactionModel({ title, category, amount, date, user: req.user._id, });
        await transaction.save()
       res.status(201).json(transaction) 
    } catch (error) {
        res.status(400).json({message: "problem adding"})
        
    }


};

export default {getTransactions, addtransaction}