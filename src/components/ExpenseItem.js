import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
   
    return (
        <div>
         
            <div className='expense-item'>
            <ExpenseDate date={props.date}/>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
                <br></br>
            </div>
        </div>
    );
}

export default ExpenseItem;