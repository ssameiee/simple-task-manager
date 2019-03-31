import React from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.Component {
  render() {
    return (
      <img
        className={`avatar avatar--${this.props.imgSize || 'size'} avatar--${this.props.imgShape || 'circle'}`}
        src={this.props.imgSrc}
      />
    );
  }
}

Avatar.propTypes = {
  imgSize: PropTypes.string,
  imgShape: PropTypes.string,
  imgSrc: PropTypes.string,
};
