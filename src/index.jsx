import '@fontsource/poppins';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'JSON_VIEWER_DATA' && e.data.data) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    Modal.setAppElement('#root');
    root.render(
      <Provider store={store}>
        <App response={e.data.data} />
      </Provider>,
    );
  }
});
