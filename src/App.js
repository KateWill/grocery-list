import React, { Component } from 'react';
import List from './grocery/List';
import AddForm from './grocery/AddForm';
//import EditForm from './grocery/EditForm';

class App extends Component {
  state = {
    list: [ 
      {id: 1, itemName: 'apple', price: 1.00, complete: false, showEditForm: false,},
      {id: 2, itemName: 'toothpaste', price: 3.00, complete: false, showEditForm: false,},
      {id: 3, itemName: 'candy', price: 5.00, complete: true, showEditForm: false,}, 
    ],
    
  }

  addItem = (incomingListItem) => {
    const { list } = this.state
    const item = { id: this.getUniqID(), ...incomingListItem } 
    this.setState({ list: [item, ...list]})
  }
  

  getUniqID = () => {
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1)
  }

  itemClick = (id) => {
    const { list } = this.state
    this.setState({
      list: list.map( item => {
        if(item.id === id){
          return{
            ...item, 
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  removeItem = (id) => {
    const items = this.state.list.filter( item =>{
      if(item.id !== id)
        return item

    });
    this.setState({list: [...items], });
  };

  editItem = (id,incomingListItem) => {
    const { list } = this.state
    const items = this.state.list.filter( item =>{
      if(item.id == id)
      //item.id = {...incomingListItem } 
      
      return

     });
    //this.setState({list: [items, ...list], });
  };
  toggleForm = (id) => {
    // const items = this.state.list.filter( item =>{
    //   if(item.id !== id)
    //   this.setState({showEditForm: !this.state.showEditForm,})

    // });
    const { list } = this.state
    
    list.map( item => {
        if(item.id === id)
          this.setState({showEditForm: !this.state.showEditForm})
    })
    // return form
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <List name="Grocery List" items={list} itemClick={this.itemClick} remove={this.removeItem} toggleForm={this.toggleForm} />
        <AddForm addItem={this.addItem}  />
        
      </div>
    );
  }
}

export default App;
