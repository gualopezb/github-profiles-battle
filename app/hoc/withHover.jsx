/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';

export default function withHover(WrappedComponent, propName = 'hovering') {
  return class WithHover extends Component {
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

      const props = {
        [propName]: hovering,
        ...this.props,
      };

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
}
