import React from 'react';

export default class SendBtn extends React.Component {
  render() {
    return (
      <div className="border--left padding--base task__comment task__button--blue">
        <a className="task__button">
          <i className="fa fa-share fa-sm color--white" />
        </a>
      </div>
    );
  }
}
