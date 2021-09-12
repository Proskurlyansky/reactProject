import React, {Component} from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './filterGroup.css';

export default class FilterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравившиеся'}
      ]
    }
  }

  render() {
    const {btns} = this.state;
    const buttons = btns.map(btn => {
      const color = btn.name === this.props.filter ? '' : 'light';
      return (
        <MDBBtn color={color} key={btn.name} onClick={() => this.props.onFilterSelect(btn.name)}>{btn.label}</MDBBtn>
      )
    });
    return(
      <div className='filterGroup'>
        {buttons}
      </div>
    )
  }
}