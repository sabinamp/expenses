import ExpenseForm from '../expenseform/ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onNewExpenseSubmitHandler}) => {
 
  return (
    <div className='new-expense'>
      <ExpenseForm onNewExpenseSubmit={onNewExpenseSubmitHandler} />
    </div>
  );
};

export default NewExpense;

