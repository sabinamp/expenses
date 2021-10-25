import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../layout/Card/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
	const { expenseItems } = props;
    const [filter, setFilter] = useState('2021');
    
    
    const filteredItems = expenseItems.filter( item=>(
            //console.log("filter: "+filter );
            //console.log('Filtering...'+expenseItems.map(item=> { item.title, item.date })
            item.date.getFullYear().toString() === filter
        ));
        
    

    const onYearSelectedHandler = (year)=>{
        setFilter(year);          
    }


	return ( 
        <div>            
            <Card className= "expenses">
            <ExpenseFilter selected={filter} onYearSelectedHandler={onYearSelectedHandler}/>
            { filteredItems.map( (item)=>         
                (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)
            )}
            </Card>
        </div>
		
	);
};

export default Expenses;
