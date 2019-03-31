import React from 'react';

export default class ProjectList extends React.Component {
  render() {
    return (
      <div className="">
        <h1>PROJECTS</h1>
        <div className="projects__item">
          <i className="fa fa-circle-o fa-2x color--purple" />
          <h3 className="margin__left--xs color--gray">Marketing</h3>
        </div>
        <div className="projects__item">
          <i className="fa fa-circle-o fa-2x color--blue" />
          <h3 className="margin__left--xs color--gray">Design</h3>
        </div>
        <div className="projects__item">
          <i className="fa fa-circle-o fa-2x color--orange" />
          <h3 className="margin__left--xs color--gray">Development</h3>
        </div>
        <div className="projects__item">
          <i className="fa fa-circle-o fa-2x color--red" />
          <h3 className="margin__left--xs color--gray">Management</h3>
        </div>
      </div>
    );
  }
}
