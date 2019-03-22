import React, { Component } from 'react';
import List from './grocery/List';


class App extends Component {
  state = {
    list: [ 
      {id: 1, name: 'apple', price: 1.00},
      {id: 2, name: 'toothpaste', price: 3.00},
      {id: 3, name: 'candy', price: 5.00},
    ]
  }

  render() {
    const { list } = this.state
    return (
      <div>
        {/* <h1>Grocery List</h1> */}
        <List name="Grocery List" items={list} />
      </div>
    );
  }
}

export default App;
