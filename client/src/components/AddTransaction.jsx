import React, { useState } from "react";
import "../styles/AddTransaction.css";

const categories = [
  { name: "Food", colorClass: "cat-food" },
  { name: "Other", colorClass: "cat-other" },
  { name: "Transportation", colorClass: "cat-transport" },
  { name: "Work", colorClass: "cat-work" },
  { name: "Education", colorClass: "cat-education" },
  { name: "Family", colorClass: "cat-family" },
  { name: "Entertainment", colorClass: "cat-entertainment" },
];

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
            <div className="custom-select-wrapper">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="custom-select"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {category && (
                <span
                  className={`cat-badge ${
                    categories.find((catObj) => catObj.name === category)
                      ?.colorClass
                  }`}
                  style={{ marginLeft: 8 }}
                >
                  {category}
                </span>
              )}
            </div>
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
