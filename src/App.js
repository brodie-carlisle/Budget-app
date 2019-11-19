import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 800 },
  { id: uuid(), charge: "car payment", amount: 300 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  // console.log(useState())
  return (
    <>
      <Alert />
      <h1>budget Calculator</h1>
      <main className="App">
        <ExpenseList expenses={expenses}/>
        <ExpenseForm />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
