import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editBill } from '../redux/actions/billActions';
import './EditBillForm.css';

const EditBillForm = ({ bill, onCancel }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        description: bill.description,
        category: bill.category,
        amount: bill.amount.toString(),
        date: bill.date,
    });

    useEffect(() => {
        setFormData({
            description: bill.description,
            category: bill.category,
            amount: bill.amount.toString(),
            date: bill.date,
        });
    }, [bill]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBill = {
            ...bill,
            ...formData,
            amount: parseFloat(formData.amount), 
        };
        dispatch(editBill(bill.id, updatedBill));
        onCancel(); 
    };

    return (
        <div className='edit-bill-form'>
        <form onSubmit={handleSubmit}>
            <h2>Edit Bill</h2>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
        </div>
    );
};

export default EditBillForm;
