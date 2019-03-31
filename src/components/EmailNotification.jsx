import React from 'react';
import Icon from './Icon';

export default class EmailNotification extends React.Component {
  render() {
    return (
      <div className="email-notification">
        <Icon iconName="cog" />
        <Icon iconName="envelope" badge={8} />
        <Icon iconName="bell" badge={2} />
      </div>
    );
  }
}
