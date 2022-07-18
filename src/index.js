import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import { FunctionProvider } from './context/FunctionProvider';
import { StateMachineProvider, createStore } from 'little-state-machine';

createStore({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FunctionProvider>
    <StateMachineProvider>
      <Router>
        <App />
      </Router>
    </StateMachineProvider>
  </FunctionProvider>
);
