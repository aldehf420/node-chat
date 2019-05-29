import React, {Component} from 'react';

class Signup extends Component{
    render(){
        return (
            <div>
                <button><a href="./Login">로그인</a></button>
                <button><a href="./Signup">회원가입</a></button>
            </div>
        );
    }
}

export default Signup;