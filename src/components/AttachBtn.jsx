import React from 'react';
import Icon from './Icon';

export default class AttachBtn extends React.Component {
  render() {
    return (
      <div className="border--left-dark padding--base task__comment task__button--gray">
        <a className="task__button task__button--color-gray">
          <i className="fa fa-paperclip fa-sm" />
        </a>
      </div>
    );
  }
}
