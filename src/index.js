import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Main CSS file for global styles
import App from './App'; // Main component that will hold our logic and UI
import reportWebVitals from './reportWebVitals';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root.
root.render(
  <React.StrictMode>
    <div className="app-container">
      <h1 className="app-title">Crypto Tracker</h1> {/* Add Crypto Tracker text */}
      <App />
    </div>
  </React.StrictMode>
);

// Optional: report web vitals for performance analysis.
reportWebVitals();
