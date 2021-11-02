import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import CustomThemeProvider from './theme/CustomThemeProvider';
import App from './App';
import store from './state/store';

ReactDOM.render(
  <CustomThemeProvider>
    <Router>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </Router>
  </CustomThemeProvider>,

  document.querySelector('#root')
);
