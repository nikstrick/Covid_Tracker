import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <App />
    <footer>
      <p style={{paddingLeft:'10px',paddingRight:'10px',fontSize:'10px'}}>
        Disclaimer-The above Stats are accurate but not exact.Since the app uses public api to get data the accuracy may dissolve in days ahead 
      </p>
    </footer>
  </React.Fragment>,
  document.getElementById('root')
);
