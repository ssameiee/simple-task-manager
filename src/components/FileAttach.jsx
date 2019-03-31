import React from 'react';
import Icon from './Icon';

export default class FileAttach extends React.Component {
  render() {
    return (
      <div className="task__details__attach padding--base">
        <Icon iconName="file-text-o" bgColor="gray" iconSize="3x" iconShape="rectangle" />

        <div className="task--space">
          <p>Article.docx</p>
          <p className="color--gray">Added 25 Feb, 2018</p>
        </div>

        <div>
          <Icon iconName="trash-o" bgColor="trancparent" iconSize="2x" />
          <Icon iconName="cloud-download" bgColor="trancparent" iconSize="2x" />
        </div>
      </div>
    );
  }
}
