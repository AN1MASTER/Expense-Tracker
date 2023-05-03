import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './ExpensesList.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses Found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent =  <ExpensesList items={filteredExpenses}/>
    }
 
    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
        {expensesContent}
        </Card>
    </div>
    );
};

export default Expenses;