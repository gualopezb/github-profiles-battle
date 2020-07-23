import React from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
  color: 'rgb(187, 46, 31)',
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink to="/" exact className="nav-link" activeStyle={activeStyle}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/battle" className="nav-link" activeStyle={activeStyle}>
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
