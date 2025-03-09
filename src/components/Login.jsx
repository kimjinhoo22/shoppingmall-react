import KakaoLogin from '../assets/images/kakao-login.png'
import GoogleLogin from '../assets/images/google-login.png'
import NaverLogin from '../assets/images/naver-login.png'
import styled from "styled-components";

export function Login(){
    return (
        <LoginWrapper>
        <div className="login-container">
            <h1>로그인</h1>
            <form action="/login/process" method="post" id="loginForm">
                <input className="login-input" type="text" id="username" name="username" placeholder="이메일 아이디"
                       required/>
                <input className="login-input" type="password" id="password" name="password" placeholder="비밀번호"
                       required/>
                <span className="error"></span>

                <div className="remember-wrap">
                    <input type="checkbox" name="remember-me" className="remember"/>
                    <span className="remember-span">로그인 유지</span>
                </div>

                <button type="submit" className="main-Btn">로그인</button>
            </form>

            <div className="login-footer">
                <div className="footer-links">
                    <a href="/users/find/id">아이디 찾기</a>
                    <a href="/users/find/pass">비밀번호 찾기</a>
                    <a href="/users">회원가입</a>
                </div>
            </div>

            <div className="social-login">
                <div className="social-login-title">
                    <span>SNS 간편 로그인/회원가입</span>
                </div>
                <div className="social-login-buttons">
                    <a href="http://localhost:8080/oauth2/authorization/kakao">
                        <img src={KakaoLogin} alt="카카오 로그인"/>
                    </a>
                    <a href="http://localhost:8080/oauth2/authorization/naver">
                        <img src={NaverLogin} alt="네이버 로그인"/>
                    </a>
                    <a href="http://localhost:8080/oauth2/authorization/google">
                        <img src={GoogleLogin} alt="애플 로그인"/>
                    </a>
                </div>
            </div>

            <div className="promotion-banner">
                <div className="promotion-text">
                    <p>지금 가입하면</p>
                    <p>5,000원 쿠폰 증정!</p>
                    <p>에이콘 스토어</p>
                </div>
            </div>
        </div>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`

    .login-container {
        width: 630px;
        margin: 0 auto;
        padding: 20px 110px 85px;
    }
    .login-container h1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .login-input {
        width: 100%;
        height: 48px;
        padding: 5px 15px;
        margin-bottom: 15px;
        border: 1px solid #dadada;
        border-radius: 5px;
        font-size: 15px;
    }

    .remember-wrap{
        padding-bottom: 15px;
    }
    .remember{
        height: auto;

    }

    .login-input:focus {
        outline: none;
        border-color: #4285f4;
    }

    .error {
        display: block;
        color: #e74c3c;
        font-size: 14px;
        margin-bottom: 15px;
        text-align: center;
    }


    .login-footer {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .footer-links {
        display: flex;
        gap: 20px;
    }

    .footer-links a {
        color: #555;
        text-decoration: none;
        font-size: 14px;
    }

    .social-login-title {
        text-align: center;
        position: relative;
        margin: 30px 0;
    }

    .social-login-title::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #dadada;
        z-index: -1;
    }

    .social-login-title span {
        background-color: #f5f6f7;
        padding: 0 10px;
        font-size: 14px;
        color: #666;
    }

    .social-login-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .social-login-buttons a {
        text-decoration: none;
        transition: 0.3s;
    }

    .social-login-buttons a:hover{
        scale: 1.2;
    }

    .social-login-buttons img {
        max-height: 50px;
        width: auto;
    }

    .simple-login-button {
        display: inline-block;
        background-color: #333;
        color: white;
        padding: 8px 15px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 14px;
        margin-top: 20px;
    }

    .promotion-banner {
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    .promotion-text {
        flex: 1;
    }

    .promotion-text p:first-child {
        margin: 0;
        color: #333;
    }

    .promotion-text p:nth-child(2) {
        margin: 5px 0;
        color: #4e9eff;
        font-size: 20px;
        font-weight: bold;
    }

    .promotion-text p:last-child {
        margin: 5px 0 0;
        color: #888;
        font-size: 12px;
    }
    
`