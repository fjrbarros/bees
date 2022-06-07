import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import store from './store';
import Theme from './styles/Theme';
import 'react-toastify/dist/ReactToastify.css';
import { addUserName } from './store/user';

store.dispatch(addUserName(localStorage.getItem('userName')));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
