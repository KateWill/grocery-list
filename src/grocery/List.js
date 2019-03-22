import React from 'react'
import ListItem from './ListItem'

const List = ({items, name}) =>(

  <div>
    <h1>{name}</h1>
      <ul>
      {
        items.map(item => <ListItem key={item.id} {...item} />)
      }
      </ul>
  </div>
)

export default List 