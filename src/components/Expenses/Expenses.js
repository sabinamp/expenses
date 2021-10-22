import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../layout/Card/Card";
const Expenses = (props) => {
	const { expenseItems } = props;
    
	return ( 
            <Card>
            { expenseItems.map( (item)=>         
                (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
            )};
            </Card>
		
	);
};

export default Expenses;
