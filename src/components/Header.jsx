import React, {useEffect, useState} from "react";
import {Link, Router} from 'react-router-dom';
import dogImage from '../assets/images/dog-img.png';
import '../assets/css/common.css';

export function Header() {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     try{
    //         const response = fetch("/api/users");
    //         const data = response.json();
    //         setUser(data);
    //     }catch (error) {
    //         console.log(error);
    //     }
    //
    // }, [])

    return (
        <div className="header-border">
            <div className="header-wrap">
                <div className="top-links">
                    {user ? (
                        <div className="top-link">
                            <span>{user.name}님</span>&nbsp;
                            <a href="/logout">로그아웃</a>
                        </div>
                    ) : (
                        <div className="top-link">
                            <a href="/login">로그인</a>
                        </div>
                    )}
                    <div className="top-link">고객센터</div>
                </div>

                <div className="header-container">
                    <div className="left-section">
                        <Link to="/home" className="logo">
                            <img src={dogImage} alt="강아지" width={40} height={40} />
                            <span className="logo-text">에이콘</span>
                        </Link>
                        <ul className="nav-menu">
                            <li className="nav-item community">
                                <Link to="/board/board">커뮤니티</Link>
                                <div className="community-badge">N</div>
                            </li>
                            <li className="nav-item">
                                <Link to="/products">스토어</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="right-section">
                        <div className="search-bar">
                            <input type="text" className="search-input" placeholder="검색어를 입력해주세요."/>
                        </div>

                        <div className="user-actions">
                            <div className="icon-button">
                                <Link to="/cart/cart">
                                    🛒
                                    <div className="cart-badge">2</div>
                                </Link>
                            </div>
                            <div className="icon-button">
                                <Link to="/users/me">👤</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

