import React, { Component } from "react";

export class CreateTodo extends Component {

  constructor(props){
    super(props);
    this.state = {
      newTextItem: ''
    }
  }

  updateNewItemText = (e) => {
		this.setState({
			newTextItem: e.target.value
		})
	}
  
  render = () => (
    <div className="row">
      <div className="col form-group">
        <input
          className="form-control"
          type="text"
          value={this.state.newTextItem}
          onChange={this.updateNewItemText}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={() => this.props.callback(this.state.newTextItem)}>
          Add task
        </button>
      </div>
    </div>
  );
}
