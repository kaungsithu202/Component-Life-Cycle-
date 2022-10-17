import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tester',
      age: 20,
    };
    console.log('1 Child Constructor is Running');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('2 Child  getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('4 Child  componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5 Child  shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('6 Child  getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(preProps, preState, snapShot) {
    console.log('7 Child componentDidUpdate');
  }
  render() {
    console.log('3 Child   Render ');

    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}
