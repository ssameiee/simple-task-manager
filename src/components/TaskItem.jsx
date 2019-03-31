import React from 'react';
import Icon from './Icon';

export default class TaskItem extends React.Component {
  render() {
    return (
      <div className="border--bottom border--left projects__details">
        <Icon iconName="check" bgColor="white" iconBorder="border" />

        <div className="projects__details--length">
          <p>{this.props.title}</p>
          <p className="color--gray">{this.props.date}</p>
        </div>

        <div>
          <img src={this.props.userImage} alt={this.props.name} />
        </div>
      </div>
    );
  }
}
