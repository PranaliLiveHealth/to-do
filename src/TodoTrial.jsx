import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List.jsx'
import {Input, Row, Col, Button} from 'reactstrap';

export class TodoTrial extends Component {

  constructor(props) {
      super(props);
      this.state = {
        term: '',
        items:[]
      };
    }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }


  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
}
keyPress = (e) => {
     if(e.keyCode == 13){
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
     }
  }

  renderHeader = () => {
    return(
      <div>
        <div className="justify-content-center"><h4> TO DO</h4></div>
        <div className="justify-content-center">Add your daily task here and remove when it done.</div>
      </div>
    )
  }

renderField = () =>{
  return(
    <div className="justify-content-center display-flex" >
        <Col sm={6} className="display-flex" >
            <Input onKeyDown={this.keyPress} type="text" value={this.state.term} onChange = {this.onChange} />
            <Button className="btn btn-primary float-right" onClick = {this.onSubmit}>add</Button>
        </Col>
    </div>
  )
}

deleteListItem = (index) =>{
  let {items} = this.state;
  items.splice(index,1);
  this.setState({items});
}

  render(){
    const {items} = this.state;
    return(
      <div style={{padding:'15px'}} >
        {this.renderHeader()}
        {this.renderField()}
        <div className="padding-top-5px" >
          <List items={items} deleteListItem={this.deleteListItem}/>
        </div>
      </div>
    )
  }
}
