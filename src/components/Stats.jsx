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
    setTimeout(() => {
      // Promise
      fetch('/api/stats.json')
        .then(reponse => reponse.json())
        .then(m => {
          this.setState({
            isLoaded: m.success,
            items: m.data,
          });
        })
        .catch(e => {
          this.setState({
            error: e.message,
          });
        });

      // // async / await
      // const fn = async () => {
      //   const response = await fetch('/api/stats.json');
      //   const m = await response.json();
      //   this.setState({
      //     isLoaded: m.success,
      //     items: m.data,
      //   });
      // };
      // fn();
    }, 5000);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return (
      <div className="stats">
        {this.state.isLoaded
          ? this.state.items.map((stat, index) => {
              return <Stat key={index} count={stat.count} heading={stat.heading} subHeading={stat.subHeading} />;
            })
          : 'Loading...'}
      </div>
    );
  }
}
