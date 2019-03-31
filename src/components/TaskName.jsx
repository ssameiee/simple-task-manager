import React from 'react';
import Icon from './Icon';
import Avatar from './Avatar';

export default class TaskName extends React.Component {
  render() {
    return (
      <div className="task__title">
        <div className="task__title__image">
          <Avatar imgSize="size-s" imgShape="circle" imgSrc="./images/sample3.jpg" />
        </div>
        <div className="task__title__name">
          <h5>Natalie Smith</h5>
        </div>
        <div className="task__title__btn">
          <Icon iconName="trash" />
          <Icon iconName="user-o" />
          <Icon iconName="tag" />
          <Icon iconName="check-square-o" />
          <Icon iconName="paperclip" />
        </div>
      </div>
    );
  }
}
