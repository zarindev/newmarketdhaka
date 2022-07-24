import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import { StateMachineProvider, createStore } from 'little-state-machine';
import { FuncProvider } from './context/FuncProvider';

createStore({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FuncProvider>
    <StateMachineProvider>
      <Router>
        <App />
      </Router>
    </StateMachineProvider>
  </FuncProvider>
);
