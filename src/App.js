import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Unlimited Talk & Data Refill', amount: 45.0, category: 'Monthly Refill', date: '2026-07-01' },
    { id: 2, title: '5GB International Roaming Pass', amount: 15.0, category: 'Add-On', date: '2026-07-12' },
    { id: 3, title: 'Device Protection Plan', amount: 7.0, category: 'Insurance', date: '2026-07-15' }
  ]);

  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    if (selectedReceipt && selectedReceipt.id === id) {
      setSelectedReceipt(null);
    }
  };

  const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

  return (
    <div class="app-container">
      <Header />
      <main className="main-content">
        <section className="summary-cards">
          <div className="card">
            <h3>Total Paid</h3>
            <p>${totalSpent.toFixed(2)}</p>
          </div>
          <div className="card accent">
            <h3>Active Plan</h3>
            <p>PayG Unlimited</p>
          </div>
          <div className="card secondary">
            <h3>Total Transactions</h3>
            <p>{expenses.length}</p>
          </div>
        </section>

        <div className="dashboard-grid">
          <div>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={deleteExpense}
              onSelectReceipt={setSelectedReceipt}
            />
          </div>
          <div>
            <Receipt transaction={selectedReceipt} />
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} PayGOnline Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
