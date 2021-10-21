import './App.css';
import Expenses  from './components/Expenses/Expenses';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';
import NewExpense from './components/ExpenseItem/NewExpense';

function App() {

  const expenses=[
    {id:'e1',title:"Printer Ink", amount: 293.0, date: new Date(2021,2,3)},
   {id:'e2',title:"Car Insurance", amount: 223.0, date: new Date(2021,1,3)},
   {id:'e3',title:"New TV", amount: 799.0, date: new Date(2021,6,7)}];

  return (
    <div className="App">
      <Header title="Expenses"/>
      <Content>
        <>
        <NewExpense/>
        <Expenses expenses={expenses}/>
        </>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
