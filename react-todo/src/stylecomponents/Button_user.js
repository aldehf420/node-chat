import styled from "styled-components";
import React, {Component} from 'react';

const Wrapper = styled.button`
    left:23%;
    margin-top: 20px;
    margin-bottom : 10px;
    margin:6px;
    position: relative;
    color: #000;
    width: 50%;
    height: 25px;
    border: 2px solid #4834d4;
    vertical-align:middle;
    border-radius: 5px;
    font-size: 16px;
`;

const Button_user = () => (
    <Wrapper>회원가입</Wrapper>
);

export default Button_user;
