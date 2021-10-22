import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../layout/Card/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
	const { expenseItems } = props;
    const [filter, setFilter] = useState('2021');
    const onYearSelectedHandler = (year)=>{
        setFilter(year);
        //console.log("filter: "+filter);
    }
	return ( 
        <div>            
            <Card className= "expenses">
            <ExpenseFilter selected={filter} onYearSelectedHandler={onYearSelectedHandler}/>
            { expenseItems.map( (item)=>         
                (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
            )}
            </Card>
        </div>
		
	);
};

export default Expenses;
