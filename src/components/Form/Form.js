import React, { Component } from 'react';
import style from './Form.module.css';

class Form extends Component {

  state = {
    value: ""
  }


  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchStock(this.state.value);
  }

  render() {
  return (
    <form onSubmit={this.onSubmit}>
      <label htmlFor="search"></label>
      <input pattern="[a-zA-Z]+"
      id="search" type="text"
      value={this.state.value}
      onChange={(e)=> this.setState({value: e.target.value})}
       placeholder="Stock Index"/>
      <input type="submit" value="Submit"/>
    </form>
  );
}
}

export default Form;
