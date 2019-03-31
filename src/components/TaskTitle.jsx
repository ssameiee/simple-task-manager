import React from 'react';
import Icon from './Icon';

export default class TaskTitle extends React.Component {
  render() {
    return (
      <div className="task__details__title">
        {' '}
        <Icon iconName="check" bgColor="blue" />
        <h4 className="margin__left--xs">Write an article about design trends</h4>
      </div>
    );
  }
}
