import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import route from './src/routes/transaction.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

connectDB()

app.use("/api/transaction", route);


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});