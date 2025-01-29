import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BillDashboard from './components/BillDashboard';

const App = () => (
    <Provider store={store}>
        <div className="App">
            <BillDashboard />
        </div>
    </Provider>
);

export default App;

