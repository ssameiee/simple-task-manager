import React from 'react';

export default class TaskInfo extends React.Component {
  render() {
    return (
      <div className="border--bottom padding--base">
        <div className="flex-container color--gray task--font-s">
          <p className="task--space">Olka Nowak assigned to Natalie Smith.</p>
          <p>19 Feb, 2018</p>
        </div>
        <div className="flex-container color--gray task--font-s">
          <p className="task--space">Olka Nowak addd to Marketing.</p>
          <p>18 Feb, 2018</p>
        </div>
        <div className="flex-container color--gray task--font-s">
          <p className="task--space">Olka Nowak created task.</p>
          <p>18 Feb, 2018</p>
        </div>
      </div>
    );
  }
}
