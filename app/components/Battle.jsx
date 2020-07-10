import React, { Component } from 'react';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

export default class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({ [id]: player });
  }

  handleReset(id) {
    this.setState({
      [id]: null,
    });
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle === true) {
      return <Results playerOne={playerOne} playerTwo={playerTwo} />;
    }

    return (
      <>
        <Instructions />

        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset('playerOne')}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset('playerTwo')}
              />
            )}
          </div>

          {playerOne && playerTwo && (
            <button
              type="button"
              className="btn dark-btn btn-space"
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </button>
          )}
        </div>
      </>
    );
  }
}
