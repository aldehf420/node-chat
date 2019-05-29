import styled from "styled-components";
import React, {Component} from 'react';

const Wrapper = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
    width: 500px;
    box-shadow:10px 10px 5px grey;
`;

const Container = styled.div`
    text-size:16px;
    text-align:center;
    color: #fff;
    height: 100px;
    width: 100%;
    background-color: #4834d4;
    vertical-align:middle;
`;

const Label = styled.div`
    padding-top: 2rem;
    font-size: 2rem;
    margin-bottom: 0.25rem;
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const Form = ({children}) => (
         <Wrapper>
             <ShadowedBox>
                 <Container>
                     <Label>Chatting App</Label>
                 </Container>
                 <Contents>
                     {children}
                 </Contents>
             </ShadowedBox>
         </Wrapper>
     );

export default Form;
