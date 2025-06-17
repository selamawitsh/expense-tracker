import React, { useState } from "react";
import "../styles/TransactionList.css";

const initialTransactions = [
  {
    date: "June 7, 2025",
    title: "Lunch at campus",
    category: "Food",
    amount: -70,
  },
  {
    date: "June 7, 2025",
    title: "Scholarship Bonus",
    category: "Other",
    amount: 500,
  },
  {
    date: "June 6, 2025",
    title: "Taxi",
    category: "Transport",
    amount: -30,
  },
  {
    date: "June 5, 2025",
    title: "Part-time job",
    category: "Work",
    amount: 200,
  },
  {
    date: "June 4, 2025",
    title: "Textbooks",
    category: "Education",
    amount: -120,
  },
  {
    date: "June 3, 2025",
    title: "Coffee shop",
    category: "Food",
    amount: -15,
  },
  {
    date: "June 2, 2025",
    title: "Monthly allowance",
    category: "Family",
    amount: 300,
  },
  {
    date: "June 1, 2025",
    title: "Movie tickets",
    category: "Entertainment",
    amount: -45,
  },
];

const categories = [
  "All Categories",
  "Food",
  "Other",
  "Transport",
  "Work",
  "Education",
  "Family",
  "Entertainment",
];

function getCategoryClass(category) {
  switch (category) {
    case "Food":
      return "cat-food";
    case "Other":
      return "cat-other";
    case "Transport":
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

export default function TransactionList() {
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All Categories");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showFilter, setShowFilter] = useState(false); 

  const handleClear = () => {
    setType("All");
    setCategory("All Categories");
    setDateFrom("");
    setDateTo("");
  };

  const handleFilter = () => {
    let filtered = initialTransactions;

    if (type !== "All") {
      filtered = filtered.filter((t) =>
        type === "Income" ? t.amount > 0 : t.amount < 0
      );
    }
    if (category !== "All Categories") {
      filtered = filtered.filter((t) => t.category === category);
    }
    if (dateFrom) {
      filtered = filtered.filter((t) => new Date(t.date) >= new Date(dateFrom));
    }
    if (dateTo) {
      filtered = filtered.filter((t) => new Date(t.date) <= new Date(dateTo));
    }
    setTransactions(filtered);
  };

  return (
    <div className="transaction-list-container">
      <div className="transaction-list-header">
        <h2>Transactions</h2>
        <span
          className="filter-icon"
          onClick={() => setShowFilter((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          ▼ Filter
        </span>
      </div>
      {showFilter && (
        <div className="filter-box">
          <div className="filter-row">
            <div className="filter-group">
              <label>Transaction Type</label>
              <div className="filter-btn-group">
                <button
                  className={type === "All" ? "active" : ""}
                  onClick={() => setType("All")}
                >
                  All
                </button>
                <button
                  className={type === "Income" ? "active" : ""}
                  onClick={() => setType("Income")}
                >
                  Income
                </button>
                <button
                  className={type === "Expense" ? "active" : ""}
                  onClick={() => setType("Expense")}
                >
                  Expense
                </button>
              </div>
            </div>
            <div className="filter-group">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Date Range</label>
              <div className="date-range">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-group filter-actions">
              <button className="apply-btn" onClick={handleFilter}>
                Apply Filters
              </button>
              <button className="clear-btn" onClick={handleClear}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, idx) => (
            <tr key={idx}>
              <td>{t.date}</td>
              <td>
                <b>{t.title}</b>
              </td>
              <td>
                <span className={`cat-badge ${getCategoryClass(t.category)}`}>
                  {t.category}
                </span>
              </td>
              <td
                className={t.amount < 0 ? "amount-negative" : "amount-positive"}
              >
                {t.amount < 0 ? `-$${Math.abs(t.amount)}` : `+$${t.amount}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
