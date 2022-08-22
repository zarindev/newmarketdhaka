import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { AppProvider } from './context/AppProvider';
import ScrollToTop from './utils/ScrollToTop';
import { AuthProvider } from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

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
  <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <AppProvider>
      <AuthProvider>
        <StateMachineProvider>
          <Router>
            <ScrollToTop>
              <App />
            </ScrollToTop>
          </Router>
        </StateMachineProvider>
      </AuthProvider>
    </AppProvider>
  </QueryClientProvider>
);
