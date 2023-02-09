import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';
import './Login.css'

const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) =>{
        e.preventDefault();
        dispatch(login(true));
        navigator('/')
    }
    return (
        <div className='login-box'>
            <form onSubmit={(e)=>loginUser(e)}>
                <h2 className='login-title'>Charted</h2>
                <div className='userId'>
                    <div><label htmlFor='userId'></label></div>
                    <div><input className='textId' type="text" id="userId"  placeholder='아이디를 입력해주세요' /></div>
                </div>
                <div className='userPw'>
                    <div><label htmlFor='userPass'></label></div>
                    <div><input className='textPw' type="password" id="userPass"  placeholder='비밀번호를 입력해주세요' /></div>
                    <div><h4 className='forgotPass'>비밀번호를 잊으셨나요?</h4></div>
                </div>
                <div className='loginBtn'>
                     <input className='loginButton' type="submit" value="로그인"  />
                 </div>
                 <div className='social-login-box'>
                    <button className='login-social'><i class="fab fa-google"></i>Google로 로그인</button>
                    <button className='login-social'><i class="fab fa-facebook-square"></i>Facebook으로 로그인</button>
                    <button className='login-social'><i class="fab fa-twitter"></i>Twitter으로 로그인</button>
                 </div>
            </form>

            
        </div>
    );
};

export default Login;