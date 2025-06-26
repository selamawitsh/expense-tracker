import React from "react";
import {
  PieChart, Pie, Cell, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import "../styles/Reports.css";
import Navbar from "../components/Navbar";


const pieData = [
  { name: "Food", value: 400 },
  { name: "Transportation", value: 300 },
  { name: "Education", value: 200 },
  { name: "Entertainment", value: 100 },
  { name: "Others", value: 150 },
];

const COLORS = ["#6366f1", "#22c55e", "#fbbf24", "#f472b6", "#a3a3a3"];

const barData = [
  { name: "Week 1", amount: 400 },
  { name: "Week 2", amount: 500 },
  { name: "Week 3", amount: 350 },
  { name: "Week 4", amount: 650 },
];

export default function Reports() {
  return (
    <>
    <Navbar/>
    <div className="reports-container">
      <h2 className="reports-title">Financial Reports</h2>
      <div className="reports-main">
        <div className="reports-left">
          <div className="card">
            <h4>Expenses by Category</h4>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  label={false}
                >
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  formatter={(value, entry, idx) => (
                    <span style={{
                      color: "#222",
                      fontWeight: 500,
                      marginLeft: 4,
                      fontSize: 14
                    }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h4>Weekly Spending</h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
        <div className="reports-right">

          <div className="card summary-card">
            <h4>Monthly Summary</h4>
            <p className="summary-desc">Financial overview for June 2025</p>
            <div className="summary-row income">
              <span className="summary-icon income">⬆️</span>
              <span>Income</span>
              <span className="summary-amount income">2,500 birr</span>
            </div>
            <div className="summary-row expense">
              <span className="summary-icon expense">⬇️</span>
              <span>Expense</span>
              <span className="summary-amount expense">2,000 birr</span>
            </div>
            <div className="summary-row balance">
              <span className="summary-icon balance">💰</span>
              <span>Balance</span>
              <span className="summary-amount balance">500 birr</span>
            </div>
            <div className="summary-actions">
              <button className="export-btn">Export PDF</button>
              <button className="export-btn csv">Export CSV</button>
            </div>
          </div>
          
          <div className="card insights-card">
            <h4>Spending Insights</h4>
            <ul className="insights-list">
              <li>
                <b>Highest spending category</b><br />
                Food (40% of total)
              </li>
              <li>
                <b>Spending trend</b><br />
                10% increase from last month
              </li>
              <li>
                <b>Saving opportunity</b><br />
                Reduce transportation by 15%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}