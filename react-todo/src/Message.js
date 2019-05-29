import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Message extends Component {

    state = {
        message: ''
    };

    handleChange = (e) => {
        this.setState({
            message : e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.message);
        this.setState({
            message: ''
        })
    };

    render() {

        const style = {
          margin:"8px",
        };

        return (
            <Form onSubmit={this.handleSubmit} style={style}>
                <FormGroup>
                    <Input type="input" name="text" id="exampleText" value={this.state.message} onChange={this.handleChange} placeholder="메세지를 입력하세요.."/>
                </FormGroup>
                <button type="submit">send</button>
            </Form>
        );
    }
}

export default Message