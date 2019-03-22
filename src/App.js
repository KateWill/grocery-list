import React, { Component } from 'react';
import List from './grocery/List';
import AddForm from './grocery/AddForm'

class App extends Component {
  state = {
    list: [ 
      {id: 1, itemName: 'apple', price: 1.00},
      {id: 2, itemName: 'toothpaste', price: 3.00},
      {id: 3, itemName: 'candy', price: 5.00},
    ]
  }

  addItem = (incomingListItem) =>{

  }

  render() {
    const { list, addItem } = this.state
    return (
      <div>
        <AddForm addItem={addItem} />
        <List name="Grocery List" items={list} />
      </div>
    );
  }
}

export default App;
