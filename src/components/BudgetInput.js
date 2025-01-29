import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget } from '../redux/actions/billActions';
import './BudgetInput.css';

const BudgetInput = () => {
    const dispatch = useDispatch();
    const monthlyBudget = useSelector((state) => state.bills.monthlyBudget);
    const [budget, setBudgetLocal] = useState(monthlyBudget);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBudget(parseFloat(budget)));
    };

    return (
        <div className="budget-input">  
            <h2>Set Monthly Budget</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudgetLocal(e.target.value)}
                    placeholder="Enter monthly budget"
                    required
                />
                <button type="submit">Set Budget</button>
            </form>
        </div>
    );
};

export default BudgetInput;
