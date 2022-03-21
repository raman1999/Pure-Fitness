import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthenticationProvider } from './Context/AuthenticationProvider';
import { makeServer } from './server';


// Call make Server
makeServer();

ReactDOM.render(

  <Router>
    <React.StrictMode>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
