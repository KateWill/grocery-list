import React from 'react'

const ListItem = ({id, name, price}) =>(
  <li>
    {name} : ${price}
  </li>
)

export default ListItem