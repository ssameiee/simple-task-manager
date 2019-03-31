import React from 'react';
import Icon from './Icon';

export default class TaskCompleted extends React.Component {
  render() {
    return (
      <div className="border--bottom padding--base">
        <div className="task__details__done">
          <Icon iconName="check" />
          <p className="color--blue task__details__done--name">Natelie completed this task.</p>
          <p className="color--gray">26 Feb, 2018</p>
        </div>
      </div>
    );
  }
}
