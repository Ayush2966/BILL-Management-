import React from 'react';
import { useSelector } from 'react-redux';
import './BudgetCalculator.css';

const BudgetCalculator = () => {
    const bills = useSelector((state) => state.bills.bills);
    const monthlyBudget = useSelector((state) => state.bills.monthlyBudget);

    const calculateBillsWithinBudget = (bills, budget) => {
        bills.sort((a, b) => a.amount - b.amount); 
        let total = 0;
        const selectedBills = [];

        for (const bill of bills) {
            if (total + bill.amount <= budget) {
                total += bill.amount;
                selectedBills.push(bill);
            } else {
                break;
            }
        }

        return selectedBills;
    };

    const selectedBills = calculateBillsWithinBudget(bills, monthlyBudget);

    return (
        <div className='budget-calculator'>
            <h2>Bills to Pay Within Budget</h2>
            <p>Monthly Budget: {monthlyBudget}</p>
            <ul>
                {bills.map((bill) => {
                    const isWithinBudget = selectedBills.some(
                        (selectedBill) => selectedBill.id === bill.id
                    );
                    return (
                        <li
                            key={bill.id}
                            style={{
                                backgroundColor: isWithinBudget ? 'lightgreen' : 'lightcoral',
                                margin: '5px',
                                padding: '10px',
                                border: '1px solid #ccc',
                            }}
                        >
                            {bill.description} - {bill.amount} ({bill.category})
                            {isWithinBudget ? ' (Within Budget)' : ' (Exceeds Budget)'}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BudgetCalculator;
