import ExpenseDate from './ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
   
    return (
        <div>         
            <div className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item_descr'>
                    <h2>{props.title}</h2>
                    <div className='expense-item_price'>${props.amount}</div>
                </div>               
            </div>
        </div>
    );
}

export default ExpenseItem;