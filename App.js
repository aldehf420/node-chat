import React, {Component} from 'react';
import './App.css';
import Message from './Message.js'
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';



class App extends Component{

  state = {
    messages:[]
  };

  key = 0;

  handleCreate = (data) => {
    const { messages } = this.state;
    this.setState({
      messages : messages.concat(
          {
            data,
            key:this.key++
          }
      )
    });
  };

  render(){

    const list = this.state.messages.map(info => (
        <div key={info.key}>{info.data}</div>
    ));

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
      height:"200px",
    };

    return (
        <div>
                    <div style={style}>{list}</div>
                    <Message
                        onCreate={this.handleCreate}/>
        </div>
    );
  }
}

export default App;