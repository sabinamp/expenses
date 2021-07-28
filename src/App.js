import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses=[
    {id:'e1',title:"Car Insurance", amount: 293.0, date: new Date(2021,2,3)},
   {id:'e2',title:"Car Insurance", amount: 223.0, date: new Date(2021,1,3)}];

  return (
    <div className="App">
     <ExpenseItem title= {expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
     <ExpenseItem title= {expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    </div>
  );
}

export default App;
