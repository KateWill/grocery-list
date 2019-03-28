import React from 'react'
import ListItem from './ListItem'
import { Container, Header } from 'semantic-ui-react';

const List = ({items, name, itemClick, remove, toggleForm,}) =>(

  <Container>
    <Header as='h3' textAlign='center'>
      <h1>{name}</h1>
    </Header>
    <h2>Items</h2>
      <ol>
      {
        items.map(item => <ListItem key={item.id} {...item} itemClick={itemClick} remove={remove} toggleForm={toggleForm} />)
      }
      </ol>
  </Container>
)

export default List 