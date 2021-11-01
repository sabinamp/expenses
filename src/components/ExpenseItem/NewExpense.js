import ExpenseForm from '../expenseform/ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = ({ onNewExpenseSubmitHandler}) => {
  const [isAdding, setIsAdding] = useState(false);
  const startEditingHandler = ()=>{
    setIsAdding(true);
  }

  const saveExpenseDataHandler = (newExpense)=>{
    let expenseData = { ...newExpense, id: Math.random().toString() };
    onNewExpenseSubmitHandler(expenseData);
    setIsAdding(false);
  }

  return (
    <div className='new-expense'>
      {isAdding && <ExpenseForm onNewExpenseSubmit={saveExpenseDataHandler} onCancel={()=>setIsAdding(false)}/> }
      {!isAdding && <button onClick={startEditingHandler}>Add New Expense</button> }
    </div>
  );
};

export default NewExpense;

