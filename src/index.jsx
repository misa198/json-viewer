import '@fontsource/poppins';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import App from './App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
