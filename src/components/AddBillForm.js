import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '../redux/actions/billActions';
import './AddBillForm.css';

const AddBillForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        description: '',
        category: '',
        amount: '',
        date: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBill = {
            id: Date.now(),
            ...formData,
            amount: parseFloat(formData.amount),
        };
        dispatch(addBill(newBill));
        setFormData({ description: '', category: '', amount: '', date: '' });
    };

    return (
        <form className="add-bill-form" onSubmit={handleSubmit}>  {}
            <h2>Add New Bill</h2>
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
            <button type="submit">Add Bill</button>
        </form>
    );
};

export default AddBillForm;