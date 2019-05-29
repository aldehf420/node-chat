import React, {Component} from 'react';
import styled from "styled-components";
import Form from '../stylecomponents/Form';
import Input from '../stylecomponents/input';
import Button from '../stylecomponents/Button';
import Button_user from '../stylecomponents/Button_user';

class Login extends Component{
    render(){
        return (
            <Form>
                <Input />
                <Input />
                <Button/>
                <Button_user/>
            </Form>
        );
    }
}

export default Login;