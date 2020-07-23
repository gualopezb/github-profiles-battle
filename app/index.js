/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from './contexts/theme';

import Popular from './components/Popular';
import Battle from './components/Battle';
import Results from './components/Results';
import Nav from './components/Nav';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
        }));
      },
    };
  }

  render() {
    const { theme, toggleTheme } = this.state;
    return (
      <Router>
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className={theme}>
            <div className="container">
              <Nav />

              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
