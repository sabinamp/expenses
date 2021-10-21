import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = () => {
  const [title, setTitle]=useState('');
  const [amount, setAmount]=useState(0.01);
  const [expenseDate, setExpenseDate] = useState('');
  const titleChangeHandler=(e)=>{ setTitle(e.target.value); console.log(`title: ${title}`)};
  const amountChangeHandler = (e)=>{ setAmount(e.target.value); console.log(`amount: ${amount}`)};
  const dateChangeHandler = (e)=>{ 
    console.log(`expenseDate: ${expenseDate}`);
    setExpenseDate(e.target.value);
 };

    return (
      <form>
        <div className='new-expense_controls'>
          <div className='new-expense_control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} value={title} />
          </div>
          <div className='new-expense_control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount}/>
          </div>
          <div className='new-expense_control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
          </div>
        </div>
        <div className='new-expense_btn'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  };
  
  export default ExpenseForm;