import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';  
import App from './App';


const CLIENT_ID = '91828566801-e58ej3cgd70fcaq5gjl69og60j4h2kiq.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Wrap the App component with GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
