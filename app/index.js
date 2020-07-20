/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './contexts/theme';

// import Popular from './components/Popular';
import Battle from './components/Battle';
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
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className={theme}>
          <div className="container">
            <Nav />
            <Battle />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
