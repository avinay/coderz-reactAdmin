import React, { Component } from 'react';
import { ProgressBar, Form } from 'react-bootstrap';
import { Panel } from '../basic-ui/Panel';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
    inputValue: '',
    enablePanel: false,
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handlePanel = this.handlePanel.bind(this);
    this.panelClose = this.panelClose.bind(this);
  } 
  statusChangedHandler(event, id) {
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
}


inputChangeHandler(event) {
    this.setState({
        inputValue: event.target.value
    });
}

handlePanel(event, enablePanel, dataID){
    event.stopPropagation();
      console.log("enablePanel", enablePanel)
    this.setState({
        enablePanel: enablePanel
    });
}

panelClose(value){
    console.log("test", value);
    this.setState({
        enablePanel: value
    });
}
  
  render () {
    return (
      <div>
          <Panel width={500} isEnable={this.state.enablePanel} panelClose={this.panelClose}  title="New Connection" onClick={(e) => {this.handlePanel(e, false)}}> 
          <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="name">Name</label>
                    <Form.Control type="text" id="name" placeholder="Name" size="lg" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="type">Type</label>
                    <Form.Control type="email" className="form-control" id="type" placeholder="Type" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="servername">Server Name</label>
                    <Form.Control type="password" className="form-control" id="servername" placeholder="Server Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="databaseName">Databse Name</label>
                    <Form.Control type="password" className="form-control" id="databaseName" placeholder="Database Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="authenticationType">Authentication Type</label>
                    <Form.Control type="password" className="form-control" id="authenticationType" placeholder="Authentication Type" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="username">Username</label>
                    <Form.Control type="password" className="form-control" id="username" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="password">Password</label>
                    <Form.Control type="password" className="form-control" id="password" placeholder="Password" />
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
          </Panel>
        <div className="row" onClick={(e) => {this.handlePanel(e, false)}}>
          <div className="col-lg-12 grid-margin">
            <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-lg-10">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn">Connections</button>
                        <button type="button" className="btn btn-primary">Objects</button>
                        <button type="button" className="btn btn-primary">Mappings</button>
                      </div>
                      
                      </div>
                      <div className="col-lg-2">
                      <button type="button" className="btn btn-success btn-icon-text">
                        <i className="fa fa-plus btn-icon-prepend"></i> New Connection </button>
                      </div>
                  </div>
                
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Type </th>
                        <th> Status </th>
                        <th> No.of Objects </th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-medium"> 1 </td>
                        <td onClick={(e) => {this.handlePanel(e, true)}}> Herman Beck </td>
                        
                        <td> $ 77.99 </td>
                        <td>
                          <ProgressBar variant="success" striped now={25}/>
                        </td>
                        <td className="text-danger"> 53.64% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td><i className="mdi mdi-pencil"></i> &nbsp;   <i className="mdi mdi-delete"></i></td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 2 </td>
                        <td onClick={(e) => {this.handlePanel(e, true)}}>  Messsy Adam </td>
                        
                        <td> $245.30 </td>
                        <td>
                          <ProgressBar variant="danger" striped now={75}/>
                        </td>
                        <td className="text-success"> 24.56% <i className="mdi mdi-arrow-up"></i>
                        </td>

                        <td><i className="mdi mdi-pencil"></i> &nbsp;   <i className="mdi mdi-delete"></i></td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 3 </td>
                        <td> John Richards </td>
                        
                        <td> $138.00 </td>
                        <td>
                          <ProgressBar variant="warning" striped now={90}/>
                        </td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td><i className="mdi mdi-pencil"></i> &nbsp;   <i className="mdi mdi-delete"></i></td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 4 </td>
                        <td> Peter Meggik </td>
                        
                        <td> $ 77.99 </td>
                        <td>
                          <ProgressBar variant="primary" striped now={50}/>
                        </td>
                        <td className="text-danger"> 53.45% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td><i className="mdi mdi-pencil"></i> &nbsp;   <i className="mdi mdi-delete"></i></td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 5 </td>
                        <td> Edward </td>
                        
                        <td> $ 160.25 </td>
                        <td>
                          <ProgressBar variant="danger" striped now={35}/>
                        </td>
                        <td className="text-success"> 18.32% <i className="mdi mdi-arrow-up"></i>
                        </td>
                        <td><i className="mdi mdi-pencil"></i> &nbsp;   <i className="mdi mdi-delete"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
export default Connections;