import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBill } from '../redux/actions/billActions';
import EditBillForm from './EditBillForm';
import './BillList.css';

const BillList = ({ bills }) => {
    const dispatch = useDispatch();
    const [editingBillId, setEditingBillId] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteBill(id));
    };

    const handleEdit = (id) => {
        setEditingBillId(id);
    };

    const handleCancelEdit = () => {
        setEditingBillId(null);
    };

    return (
        <div className="bill-list">
            <ul className="bill-list-items">
                {bills.map((bill) => (
                    <li key={bill.id}>
                        {editingBillId === bill.id ? (
                            <EditBillForm bill={bill} onCancel={handleCancelEdit} />
                        ) : (
                            <div className="bill-item">
                                <div className="bill-info">
                                    <span className="bill-description">{bill.description}</span>
                                    <span className="bill-amount">${bill.amount}</span>
                                    <span className="bill-category">{bill.category}</span>
                                </div>
                                <div className="bill-actions">
                                    <button 
                                        className="edit-button"
                                        onClick={() => handleEdit(bill.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDelete(bill.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BillList;