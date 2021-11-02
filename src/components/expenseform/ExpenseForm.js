import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = (props) => {
  const [title, setTitle]=useState('');
  const [amount, setAmount]=useState(0.01);
  const [expenseDate, setExpenseDate] = useState('');

  const [isValidAmount, setIsValidAmount] = useState(false);
  const [isEmptyTitle, setIsEmptyTitle] = useState(true);

  const titleChangeHandler=(e)=>{ 
    const titleVal = e.target.value;
    if(titleVal.trim().length > 0){
      setTitle(titleVal);
      setIsEmptyTitle(false);
    }else{
      setIsEmptyTitle(true);
    }
    /* console.log(`title: ${title}`) */
  };

  const amountChangeHandler = (e)=>{ 
    const amountVal = e.target.value;
    if( Number(amountVal) > 0.00){
      setIsValidAmount(true);
    }
    setAmount(amountVal);
     /* console.log(`amount: ${amount}`) */
  };

  const dateChangeHandler = (e)=>{ 
    console.log(`expenseDate: ${expenseDate}`);
    setExpenseDate(e.target.value);
 };

 const submitHandler = (event)=>{
   event.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(expenseDate)
    };
    props.onNewExpenseSubmit(newExpense);
    setTitle('');
    setAmount('');
    setExpenseDate('');
 }

    return (
      <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
          <div className={`new-expense_control ${isEmptyTitle? 'invalid': ''}`}>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} value={title} />
          </div>
          <div className={`new-expense_control ${isValidAmount? '': 'invalid' }`}>
            <label>Amount</label>
            <input
             type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount}/>
          </div>
          <div className='new-expense_control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
          </div>
        </div>
        <div className='new-expense-btn'>
          <button type='button' onClick={props.onCancel}>Cancel</button>        
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  };
  
  export default ExpenseForm;