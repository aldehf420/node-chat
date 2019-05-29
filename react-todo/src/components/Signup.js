import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component{
    render(){
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="name" name="name" id="exampleName" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <button><a href="./">만들기</a></button>
                <button><a href="./">back</a></button>
            </Form>
        );
    }
}

export default Signup;