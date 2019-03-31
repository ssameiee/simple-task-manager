import React from 'react';
import Icon from './Icon';

export default class Tasklist extends React.Component {
  render() {
    return (
      <div className="task">
        <a className="task__item buttons">
          <h2 className="margin__right--xs">All tasks</h2>
          <Icon iconName="angle-down" bgColor="trancparent-blak" iconSize="3x" />
        </a>
        <Icon iconName="ellipsis-h" bgColor="trancparent" iconSize="3x" />
      </div>
    );
  }
}
