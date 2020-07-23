/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hover extends Component {
  state = { hovering: false };

  mouseOver = () => this.setState({ hovering: true });

  mouseOut = () => this.setState({ hovering: false });

  render() {
    const { hovering } = this.state;
    const { children } = this.props;

    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {children(hovering)}
      </div>
    );
  }
}

Hover.propTypes = {
  children: PropTypes.func.isRequired,
};
