import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { AppProvider } from './context/AppProvider';
import ScrollToTop from './utils/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import Toastify from './components/Toastify/Toastify';

createStore({
  data: {
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  },
  state: {
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    address: '',
    binNumber: '',
    taxNumber: '',
    phoneNumber: '',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <AuthProvider>
      <StateMachineProvider>
        <Router>
          <ScrollToTop>
            <App />
            <Toastify position="bottom-left" />
          </ScrollToTop>
        </Router>
      </StateMachineProvider>
    </AuthProvider>
  </AppProvider>
);
