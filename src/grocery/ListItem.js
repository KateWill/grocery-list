import React from 'react'

const ListItem = ({id, itemName, price}) =>(
  <li>
    {itemName} : ${price}
  </li>
)

export default ListItem