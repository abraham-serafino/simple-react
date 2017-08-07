import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { employeeList } from './stores/employeeList';
import { appState } from './stores/appState';
import { createSimpleStore } from './SimpleStore';

const store = createSimpleStore(employeeList, appState);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();
