import React from 'react'
import {  Button, Container, } from 'semantic-ui-react';
import EditForm from './EditForm'
const styles = {
    item:{
      color: 'red',  
    },
    complete: {
      color: 'grey',
      fontStyle: 'italic',
    }
}

const ListItem = ({id, complete, itemClick, itemName, price, remove, showEditForm,toggleForm}) =>(
  <Container>
  <li style={ complete ? {...styles.complete} : styles.item} onClick={() => itemClick(id)}>
    {itemName} : ${price} <input type="checkbox" checked={complete}/>
  </li>
  <Button color="blue" onClick={() => toggleForm(id)}>
    Edit
  </Button>
  { showEditForm ? <EditForm /> : null }
  <Button color="red" onClick={ () => remove(id)}>
  Delete
  </Button>
  </Container>
)


export default ListItem