import React, {Component} from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './item.css';

export default class Item extends Component {

  render() {
    let {name, onDelete, onImportant, onLiked, important, like} = this.props;
    let classNames = 'app-list-item d-flex justify-content-between';
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span className='app-list-item-label' onClick={onLiked}>{name}</span>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-star btn-sm ' onClick={onImportant}><MDBIcon className='d-flex justify-content-center align-items-center' fas icon="star" /></button>
          <button className='btn-trash btn-sm' onClick={onDelete}><MDBIcon className='d-flex justify-content-center align-items-center' fas icon="trash-alt" /></button>
          <MDBIcon className='fa-heart d-flex justify-content-center align-items-center' fas icon="heart" />
        </div>
      </div>
    )
  }
}