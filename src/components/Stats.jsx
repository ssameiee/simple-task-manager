import React from 'react';

import Stat from './Stat';

export default class Stats extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return (
      <div className="stats">
        {this.state.items.map((stat, index) => {
          return <Stat key={index} count={stat.count} heading={stat.heading} subHeading={stat.subHeading} />;
        })}
      </div>
    );
  }
}
