import React, { Component } from 'react';
import ChildCompo from './ChildCompo';
export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tester',
      age: 20,
    };
    console.log('1 Constructor is Running');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('2 getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('4 componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5  shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('6  getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(preProps, preState, snapShot) {
    console.log('7 componentDidUpdate');
  }
  changeState() {
    this.setState({
      name: 'Mg Mg',
    });
  }
  render() {
    console.log('3  Render ');

    return (
      <div>
        {this.state.name}
        <br />
        {this.state.age}
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <ChildCompo />
      </div>
    );
  }
}
