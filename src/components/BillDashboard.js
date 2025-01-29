import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBills } from '../redux/actions/billActions';
import BillList from './BillList';
import BillChart from './BillChart';
import BudgetCalculator from './BudgetCalculator';
import AddBillForm from './AddBillForm';
import BudgetInput from './BudgetInput'; // Import BudgetInput
import './BillDashboard.css';

const BillDashboard = () => {
    const dispatch = useDispatch();
    const bills = useSelector((state) => state.bills.bills);
    const filteredBills = useSelector((state) => state.bills.filteredBills);

    useEffect(() => {
        dispatch(filterBills('')); // Reset filter on load
    }, [dispatch]);

    const handleFilterChange = (e) => {
        dispatch(filterBills(e.target.value));
    };

    return (
        <div className='bill-dashboard'>
            <h1>Bill Dashboard</h1>
            <BudgetInput /> {/* Add the BudgetInput component */}
            <AddBillForm />
            <select onChange={handleFilterChange}>
                <option value="">All Categories</option>
                <option value="FoodNDining">Food & Dining</option>
                <option value="utility">Utility</option>
                <option value="shopping">Shopping</option>
                <option value="education">Education</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Travel">Travel</option>
            </select>
            <BillList bills={filteredBills.length > 0 ? filteredBills : bills} />
            <BillChart bills={bills} />
            <BudgetCalculator />
        </div>
    );
};

export default BillDashboard;