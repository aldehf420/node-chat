import styled from "styled-components";
import React, {Component} from 'react';

const Wrapper = styled.input`
    margin-top: 3px;
    margin-bottom : 10px;
    margin:6px;
    position: relative;
    color: #000;
    width: 95%;
    padding: 3px;
    height: 50px;
    border: 2px solid #4834d4;
    vertical-align:middle;
    border-radius: 5px;
    font-size: 16px;
`;

const Input = () => (
    <Wrapper/>
);

export default Input;
