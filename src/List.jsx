import React, { Component } from 'react';
import {Col} from 'reactstrap';

export default class List extends Component {

  listItems = (list) => {
    return(
      <Col sm={6}>
        {
          list.map((item, index) =>
            <div className="list-box" key={index}>
              <span>{index+1}.</span>
              <span className="margin-left-5px">{item}</span>
              <span className="float-right cursor-pointer">
                <i class="fa fa-times" onClick={() => this.props.deleteListItem(index)}></i>
              </span>
            </div>
          )
        }
      </Col>
    );
  }

render(){
  const {items} = this.props;
  return (
    <div className="justify-content-center display-flex " >
    {this.listItems(items)}
    </div>
  )
}
}
