import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App';

import { StateMachineProvider, createStore } from 'little-state-machine';
import { AppProvider } from './context/AppProvider';
import ScrollToTop from './utils/ScrollToTop';

createStore({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <StateMachineProvider>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </StateMachineProvider>
  </AppProvider>
);
