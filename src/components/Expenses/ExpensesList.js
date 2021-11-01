import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'; 
const ExpensesList = (props) => {
    const {items} = props;
 

  if(items.length === 0)return (<h2 className='expenses-list-fallback'> No existing expense items</h2>);
    
  return (<ul className='expenses-list'>            
    { items.map( (item)=>         
     (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
     )}
     </ul>
     );
}


export default ExpensesList;