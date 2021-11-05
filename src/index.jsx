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
    <CssBaseline>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </CssBaseline>
  </CustomThemeProvider>,

  document.querySelector('#root')
);
