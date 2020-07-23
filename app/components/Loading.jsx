import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default class Loading extends Component {
  // eslint-disable-next-line react/destructuring-assignment
  state = { content: this.props.text };

  componentDidMount() {
    const { text, speed } = this.props;
    this.interval = window.setInterval(() => {
      this.setState(({ content }) => {
        return content === `${text}...`
          ? this.setState({ content: text })
          : this.setState({ content: `${content}.` });
      });
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { content } = this.state;

    return <p style={styles.content}>{content}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};
