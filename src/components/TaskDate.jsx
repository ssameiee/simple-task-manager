import React from 'react';
import Icon from './Icon';

export default class TaskDate extends React.Component {
  render() {
    return (
      <div className="task__details__date color--gray task--font-s">
        <Icon iconName="clock-o" bgColor="trancparent" iconSize="2x" />
        <p>12 Mar, 2018</p>
      </div>
    );
  }
}
