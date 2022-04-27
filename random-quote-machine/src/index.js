import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)

// ReactDOM.render(
  // <React.StrictMode>
    // <Provider store={store}>
      // <App />
    // </Provider>
  // </React.StrictMode>,
  // document.getElementById('root')
// );

