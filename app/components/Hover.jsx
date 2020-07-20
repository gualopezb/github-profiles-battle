/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

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
