import React from 'react';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="flex-container__length padding--base task__comment border--left">
        <input className="task__comment__input " type="text" placeholder="Write a comment..." />
      </div>
    );
  }
}
