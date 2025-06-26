import express, { Router } from 'express';
import transactionController from '../controllers/transaction.controller.js';


const router = express.Router();

router.route("/").get(transactionController.getTransactions).post(transactionController.addtransaction);

export default router