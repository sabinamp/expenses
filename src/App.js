import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import NewExpense from "./components/ExpenseItem/NewExpense";
import { useState } from "react";
const initialExpenses = [
  {
    id: "e1",
    title: "New Printer",
    amount: 293.0,
    date: new Date(2021, 2, 3),
  },
  {
    id: "1119",
    title: "Mobile Abo",
    amount: 29.0,
    date: new Date(2021, 9, 4),
  },
  {
    id: "1121",
    title: "New Photo Camera",
    amount: 223.0,
    date: new Date(2021, 1, 3),
  },
  {
    id: "1122",
    title: "Mobile Abo",
    amount: 29.0,
    date: new Date(2021, 5, 5),
  },
  { id: "1123",
   title: "New Video Camera",
   amount: 799.0, 
   date: new Date(2021, 5, 6) },
   {
    id: "1124",
    title: "Mobile Abo",
    amount: 29.0,
    date: new Date(2021, 10, 7),
  },
  {
    id: "1125",
    title: "Mobile Abo",
    amount: 29.0,
    date: new Date(2021, 30, 9),
  },
  {
    id: "1126",
    title: "Printer Ink",
    amount: 79.0,
    date: new Date(2021, 15, 7),
  },
  {
    id: "1127",
    title: "Mobile Abo",
    amount: 29.0,
    date: new Date(2021, 30, 8),
  },
];
function App() {
	
	const [expenses, setExpenses] = useState(initialExpenses); 

	const onAddExpenseHandler = (newExpense) => {
    console.log(newExpense);		
    setExpenses(prevExpenses=>[...prevExpenses, newExpense ]);   
	};

	return (
		<div className="App">
			<Header title="Expenses" />
			<Content>
				<>
					<NewExpense onNewExpenseSubmitHandler={onAddExpenseHandler} />
					<Expenses expenseItems={expenses} />
				</>
			</Content>
			<Footer />
		</div>
	);
}

export default App;
