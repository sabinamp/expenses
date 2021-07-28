function ExpenseItem(props) {
    const year= props.date.getFullYear();
    return (
        <div>
            <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
            <div>{props.date.toLocaleString('en-US', {day: '2-digit'})}</div>
            <div>{year}</div>
            <div>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
                <br></br>
            </div>
        </div>
    );
}

export default ExpenseItem;