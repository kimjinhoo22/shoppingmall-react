import React, {useEffect, useState} from "react";
import {Link, Router} from 'react-router-dom';
import dogImage from '../assets/images/dog-img.png';


export function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/users" , {
                    method: "GET"
                });

                if(!response.ok){
                    console.log("error")
                }
                const data = await response.json();
                console.log(data)
                setUser(data);
            }catch (error) {
                console.log(error);
            }
        }
       fetchUserData().catch(error => console.log(error));
    }, [])

    return (
        <div className="header-border">
            <div className="header-wrap">
                <div className="top-links">
                    {user ? (
                        <div className="top-link">
                            <span>{user.name}님</span>&nbsp;
                            <Link to="/logout">로그아웃</Link>
                        </div>
                    ) : (
                        <div className="top-link">
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
                    <div className="top-link">고객센터</div>
                </div>

                <div className="header-container">
                    <div className="left-section">
                        <Link to="/" className="logo">
                            <img src={dogImage} alt="강아지" width={40} height={40} />
                            <span className="logo-text">에이콘</span>
                        </Link>
                        <ul className="nav-menu">
                            <li className="nav-item community">
                                <Link to="/">커뮤니티</Link>
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                                        fill="#333333"/>
                                </svg>
                            </div>


                            <div className="icon-button">
                                <Link to="/cart/cart">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z"
                                            fill="#333333"/>
                                    </svg>
                                    <div className="cart-badge">2</div>
                                </Link>
                            </div>
                            <div className="icon-button">
                                <Link to="/users/me">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                            fill="#333333"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

