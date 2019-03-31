import React from 'react';
import PropTypes from 'prop-types';

export default class Stat extends React.Component {
  render() {
    // destructure
    const { count, heading, subHeading } = this.props;
    return (
      <div className="stat__item">
        <h5 className="stat__count">{count}</h5>
        <p className="stat__heading">{heading}</p>
        <p className="stat__subheading">{subHeading}</p>
      </div>
    );
  }
}

Stat.propTypes = {
  count: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};
