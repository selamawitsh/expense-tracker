import React, { useState } from "react";
import "../styles/AddTransaction.css";

const AddTransaction = ({ addTransaction, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !date || !amount) {
      alert("Please fill out all fields.");
      return;
    }

    addTransaction({
      title,
      category,
      date,
      amount: parseFloat(amount),
    });

    setTitle("");
    setCategory("");
    setDate("");
    setAmount("");
    onClose && onClose(); 
  };


  return (
    <div className="add-transaction">
      <div className="modal-box">
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter transaction title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>

          <button type="submit" className="add-btn">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
