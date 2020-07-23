import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../contexts/theme';

export default class PlayerInput extends Component {
  state = {
    username: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username } = this.state;
    const { onSubmit } = this.props;
    onSubmit(username);
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { username } = this.state;
    const { label } = this.props;

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form className="column player" onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="player-label">
              {label}
            </label>
            <div className="row player-inputs">
              <input
                type="text"
                id="username"
                className={`input-${theme}`}
                placeholder="github username"
                autoComplete="off"
                value={username}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                disabled={!username}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
