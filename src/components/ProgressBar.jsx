import React from 'react';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-bar__container">
        <p className="color--gray align--right">12/34</p>
        <div className="progress-bar__progress">
          <div className="progress-bar__progress__bar" />
        </div>
      </div>
    );
  }
}
