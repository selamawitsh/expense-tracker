import React, { useState } from "react";
import AddTransaction from "../components/AddTransaction.jsx";
import "../styles/ExpenseTracker.css";

// Helper for colored category badges
function getCategoryClass(category) {
  switch (category) {
    case "Food":
      return "cat-food";
    case "Other":
      return "cat-other";
    case "Transportation":
      return "cat-transport";
    case "Work":
      return "cat-work";
    case "Education":
      return "cat-education";
    case "Family":
      return "cat-family";
    case "Entertainment":
      return "cat-entertainment";
    default:
      return "";
  }
}

const initialTransactions = [
  {
    title: "Groceries",
    category: "Food",
    icon: "🍽️",
    date: "Jun 7, 2025",
    amount: -45.5,
  },
  {
    title: "Bus fare",
    category: "Transportation",
    icon: "🚌",
    date: "Jun 5, 2025",
    amount: -5.75,
  },
];

function ExpenseTracker() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showForm, setShowForm] = useState(false);

  const handleAddTransaction = (tx) => {
    const dateObj = new Date(tx.date);
    const formattedDate = dateObj.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    let icon = "❓";
    if (tx.category === "Food") icon = "🍽️";
    if (tx.category === "Transportation") icon = "🚌";
    if (tx.category === "Work") icon = "❓";
    setTransactions([...transactions, { ...tx, date: formattedDate, icon }]);
  };

  return (
    <div className="tracker-container">
      <h1>
        <b>Student Expense Tracker</b>
      </h1>
      <p>Manage your finances with ease</p>
      <div className="transactions-header">
        <h3>Your Transactions</h3>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Add Transaction
        </button>
      </div>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>DATE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx}>
              <td>
                <b>{tx.title}</b>
              </td>
              <td>
                <span className={`cat-badge ${getCategoryClass(tx.category)}`}>
                  {tx.category}
                </span>
              </td>
              <td>{tx.date}</td>
              <td
                className={
                  tx.amount < 0 ? "amount-negative" : "amount-positive"
                }
              >
                {tx.amount < 0
                  ? `-${Math.abs(tx.amount).toFixed(2)} Birr`
                  : `+${tx.amount.toFixed(2)} Birr`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <AddTransaction
          addTransaction={(tx) => {
            handleAddTransaction(tx);
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
export default ExpenseTracker;
