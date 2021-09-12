import React, {Component} from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import './searchPanel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeTerm(e) {
    const term = e.target.value.toLowerCase();
    this.setState({term});
    this.props.onUpdateSearch(this.state.term);
  }

  render() {
    return(
      <MDBInput className='inputSearch' label='Поиск по задачам' id='form1' type='text' onChange={this.changeTerm}/>
    )
  }
}