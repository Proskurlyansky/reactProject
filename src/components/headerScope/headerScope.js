import React, {Component} from 'react';
import './headerScope.css';

export default class HeaderScope extends Component {
  
  render () {
    const {liked, allPosts} = this.props;
    let term; 
    switch(allPosts) {
    case 1: term = 'ь'; break;
    case 2:
    case 3:
    case 4: term = 'и'; break;
    default: term = 'ей'; break;
    }
    return (
      <div className='headerScope'>{allPosts} запис{term}, из них понравилось {liked}</div>
    )
  }
}