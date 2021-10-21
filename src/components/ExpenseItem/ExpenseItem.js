import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../layout/Card/Card';

function ExpenseItem(props) {
   
    return (
        <div>         
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item_descr'>
                    <h2>{props.title}</h2>
                    <div className='expense-item_price'>${props.amount}</div>
                </div>               
            </Card>
        </div>
    );
}

export default ExpenseItem;