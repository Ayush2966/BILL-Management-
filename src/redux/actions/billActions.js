
export const ADD_BILL = 'ADD_BILL';
export const EDIT_BILL = 'EDIT_BILL';
export const DELETE_BILL = 'DELETE_BILL';
export const FILTER_BILLS = 'FILTER_BILLS';
export const SET_BUDGET = 'SET_BUDGET';
export const addBill = (bill) => ({
    type: ADD_BILL,
    payload: bill,
});

export const editBill = (id, updatedBill) => ({
    type: EDIT_BILL,
    payload: { id, updatedBill },
});

export const deleteBill = (id) => ({
    type: DELETE_BILL,
    payload: id,
});

export const filterBills = (category) => ({
    type: FILTER_BILLS,
    payload: category,
});

export const setBudget = (budget) => ({
    type: SET_BUDGET,
    payload: budget,
});
