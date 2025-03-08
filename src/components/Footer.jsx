import React  from "react";
import {Link} from 'react-router-dom';
import dogImage from '../assets/images/dog-img.png';
import snsKakao from '../assets/images/kakao-talk_3669990.png';
import snsInsta from '../assets/images/instagram_1400829.png';


export function Footer() {
    return (
        <footer >
            <div className="inner">
                <article>
                    <Link to="/home" className="logo">
                        <img src={dogImage}/><span className="logo-text">에이콘</span>
                    </Link>
                    <a href="/home" className="logo">

                    </a>
                    <ul className="terms">
                        <li><a>에이콘 소개</a></li>
                        <li><a>개인정보처리방침</a></li>
                        <li><a>이용약관</a></li>
                        <li><a>공지사항</a></li>
                    </ul>
                    <div className="cptxt">
                        <b>상호 : 주식회사 에이콘</b>
                        <i>|</i>
                        대표자 : 에이콘
                        <br/>
                        프로젝트명 : 반려동물 주문형 웹서비스
                        <br/>
                        팀원 : 손성호 , 이수민 , 김준서 , 김진후 , 천진호
                        <br/>
                        기술 스택 : Spring Boot , JPA , Thymeleaf
                    </div>
                    <p>ⓒ Acon Inc All Rights Reserved</p>
                </article>
                <article>
                    <h5 className="tit">고객센터</h5>
                    <a className="tel">010-2212-9624</a>
                    <ul>
                        <li>평일 9:00 ~ 18:20 | 점심시간 13:15 ~ 14:30</li>
                        (주말/공휴일 휴무)
                        <li>고객문의 : wlsgnwkd22@naver.com</li>
                    </ul>
                </article>
                <ul className="sns-area">
                    <li>
                        <a>
                            <img src={snsKakao}/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={snsInsta}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}