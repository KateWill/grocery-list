import React from 'react'

class AddForm extends React.Component {
    state = { itemName: '', price: 0.00 }
    
    handleSubmit = (e) =>{
      e.preventDefault()
      this.props.addItem(this.state)
      this.setState( {itemName: '', price: 0.00 })
    }

    handleChange = (e) =>{
      const {name, value} = e.target
      this.setState({ [name]: value })
    }
    render(){
      const { itemName, price } = this.state
      return(
        <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Add List Item"
          value={itemName}
          name="itemName"
          onChange={this.handleChange}
        />
        <br/>       
        <input 
          placeholder="Add List Item"
          value={price}
          name="price"
          type="number"
          onChange={this.handleChange}
        />
        <br/>
        <button>Add to list</button>
      </form>
      )
    }
}

export default AddForm