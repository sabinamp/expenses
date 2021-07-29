import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses
 from './components/Expenses';
function App() {

  const expenses=[
    {id:'e1',title:"Printer Ink", amount: 293.0, date: new Date(2021,2,3)},
   {id:'e2',title:"Car Insurance", amount: 223.0, date: new Date(2021,1,3)},
   {id:'e3',title:"New TV", amount: 799.0, date: new Date(2021,6,7)}];

  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
