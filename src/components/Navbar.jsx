import React from "react";
import {Link, Router} from 'react-router-dom';

export function Navbar(){


    return (
        <div className="scrolling-tab">
            <section className="page-tab-area">
                <ul>
                    <li className="active"><Link to="/">홈</Link></li>
                    <li><Link to="#">시사상식</Link></li>
                    <li><Link to="/board/board">게시판</Link></li>
                    <li><Link to="#">반슐랭</Link></li>
                    <li><Link to="#">육아팁</Link></li>
                    <li><Link to="#">시사상식</Link></li>
                    <li><Link to="#">시사상식</Link></li>
                    <li><Link to="#">시사상식</Link></li>
                </ul>
                <div>
                    <button className="write_btn" id="newPostBtn">글쓰기</button>
                </div>
            </section>
        </div>
    )
}