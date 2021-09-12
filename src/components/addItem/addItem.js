import React, {Component} from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './addItem.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeValue(e) {
    const newValue = e.target.value;
    this.setState({
      text: newValue
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.text) {
      this.props.addItem(this.state.text);
      this.setState({
        text: ''
      });
    }
    
  }

  render() {
    return (
      <>
        <form className='formAddItem' onSubmit={this.onSubmit}>
        <MDBInput label='Добавить новую задачу' id='form2' type='text' onChange={this.onChangeValue} value={this.state.text}/>
        <MDBBtn >Добавить</MDBBtn>
        </form>
      </>
    )
  }
}