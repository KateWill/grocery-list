import React from 'react'
import { Container, Button, Icon, Input, Label  } from 'semantic-ui-react';
// import '.././editForm.css';

class EditForm extends React.Component {
  state = {itemName: '', price: 0.00, }
    
    // edit(){
    //   this.setState({ value:} )
    // }
    handleSubmit = (e) =>{
      e.preventDefault()
      this.props.editItem(this.state.id, this.state)
      this.setState( {itemName: '', price: 0.00,  }) 
    };

    handleChange = (e) =>{
      const {name, value} = e.target
      this.setState({ [name]: value})
    };

    render(){
      const { itemName, price, complete } = this.state
      return(
        <Container>
          <Label as='a' color='blue' ribbon>
            Edit List Item
          </Label>
        <form onSubmit={this.handleSubmit}>
        <Input size='large'>
        <input 
          placeholder="Add List Item"
          value={itemName}
          name="itemName"
          onChange={this.handleChange}
        />
        </Input>
        <br/>       
        <Input labelPosition='right' type='text' placeholder='Amount'>
        <Label basic>$</Label>
        <input 
          placeholder="Add List Item"
          value={price}
          name="price"
          onChange={this.handleChange}
        />
        <Label>.00</Label>
        </Input>
        <br/>
        {/* <Input>
        <Label>Mark Complete</Label>
          <input 
            type="checkbox"
            //defaultChecked={complete}
            value={complete}
            name="complete"
            onChange={this.handleChange}
          />
        </Input> */}
        <Button color="green">Edit Item <Icon name="add circle"/></Button>
      </form>
      </Container>
      )
    }
}

export default EditForm