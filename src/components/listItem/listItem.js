import React from 'react';
import './listItem.css';
import Item from '../item/item';

function ListItem({data, onDelete, onImportant, onLiked}) {

  let elements = data.map(item => {
    return (
      <li key={item.key} className='list-group-item'>
        <Item 
          name={item.name} 
          important={item.important}
          like={item.like}
          onDelete={() => onDelete(item.key)}
          onImportant={() => onImportant(item.key)}
          onLiked={() => onLiked(item.key)} />
      </li>
    )
  }); 

  return (
    <ul className='app-list'>
      {elements}
    </ul>
  )
}

export default ListItem;