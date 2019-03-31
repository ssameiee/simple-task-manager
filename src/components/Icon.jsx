import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
  render() {
    return (
      <button
        className={`icon icon--${this.props.bgColor || 'gray'} icon--${this.props.iconBorder || 'none'} icon__${this
          .props.iconShape || 'icon'}`}
      >
        <i className={`fa fa-${this.props.iconName} fa-${this.props.iconSize || 'lg'}`} />
        {this.props.badge ? <span className="icon__badge">{this.props.badge}</span> : null}
      </button>
    );
  }
}

Icon.propTypes = {
  bgColor: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  badge: PropTypes.number,
  iconBorder: PropTypes.string,
  iconShape: PropTypes.string,
};
