import ExpenseForm from '../expenseform/ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;