export default class LifeCycle extends React.Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidCatch(error) {
    console.log('componentDidCatch', error);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  render() {
    console.log('render');
  }
}
