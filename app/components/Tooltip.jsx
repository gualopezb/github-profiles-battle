import React from 'react';
import PropTypes from 'prop-types';

import withHover from '../hoc/withHover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

function Tooltip({ text, children, hover }) {
  return (
    <div style={styles.container}>
      {hover && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array,
  hover: PropTypes.bool.isRequired,
};

Tooltip.defaultProps = {
  children: null,
};

export default withHover(Tooltip, 'hover');
