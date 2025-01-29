import { ADD_BILL, EDIT_BILL, DELETE_BILL, FILTER_BILLS, SET_BUDGET } from '../actions/billActions';

const initialState = {
    bills: [
        { id: 1, description: "Dominoes", category: "FoodNDining", amount: 430, date: "01-02-2020" },
        { id: 2, description: "Car wash", category: "utility", amount: 500, date: "01-06-2020" },
        { id: 3, description: "Amazon", category: "shopping", amount: 2030, date: "01-07-2020" },
        { id: 4, description: "House rent", category: "Food & Dining", amount: 35900, date: "01-03-2020" },
        { id: 5, description: "Tuition", category: "education", amount: 2200, date: "01-12-2020" },
        { id: 6, description: "Laundry", category: "Personal Care", amount: 320, date: "01-14-2020" },
        { id: 7, description: "Vacation", category: "Travel", amount: 3430, date: "01-18-2020" },
    ],
    filteredBills: [],
    monthlyBudget: 50000, // Default budget
};

const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL:
            return {
                ...state,
                bills: [...state.bills, action.payload],
            };
        case EDIT_BILL:
            return {
                ...state,
                bills: state.bills.map(bill =>
                    bill.id === action.payload.id ? action.payload.updatedBill : bill
                ),
            };
        case DELETE_BILL:
            return {
                ...state,
                bills: state.bills.filter(bill => bill.id !== action.payload),
            };
        case FILTER_BILLS:
            return {
                ...state,
                filteredBills: state.bills.filter(bill =>
                    bill.category === action.payload
                ),
            };
        case SET_BUDGET:
            return {
                ...state,
                monthlyBudget: action.payload,
            };
        default:
            return state;
    }
};

export default billReducer;