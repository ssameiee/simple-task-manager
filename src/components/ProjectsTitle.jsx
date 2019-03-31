import React from 'react';
import Icon from './Icon';

export default class ProjectsTitle extends React.Component {
  render() {
    return (
      <div className="border--bottom border__tick-purple--left projects__title">
        <h3>MARKETING</h3>
        <Icon iconName="angle-down" bgColor="trancparent-black" iconSize="3x" />
      </div>
    );
  }
}
