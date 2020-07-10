import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username } = this.state;
    const { onSubmit } = this.props;
    onSubmit(username);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    const { username } = this.state;
    const { label } = this.props;

    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={username}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-dark" disabled={!username}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
