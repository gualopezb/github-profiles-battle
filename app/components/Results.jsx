import React, { Component } from 'react';

import { battle } from '../utils/api';

export default class Results extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo]).then(console.log);
  }

  render() {
    return (
      <div>
        Results<pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
