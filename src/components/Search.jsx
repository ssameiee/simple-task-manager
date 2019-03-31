import React from 'react';
import Icon from './Icon';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-box">
        <Icon iconName="search" bgColor="trancparent" iconSize="2x" />
        <input className="search-box__input" type="text" placeholder="Search..." />
      </div>
    );
  }
}
