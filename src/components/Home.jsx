import React, {useEffect, useRef} from "react";
import '../assets/slick/slick.css';
import '../assets/slick/slick-theme.css';
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import $ from 'jquery';



export const Home = ()=> {

    const sliderRef = useRef(null);

    useEffect(() => {
        // 슬라이더 초기화
        $(sliderRef.current).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 2000,
            fade: true,
        });

        return () => {
            // 컴포넌트가 언마운트될 때 슬라이더 초기화 해제
            $(sliderRef.current).slick('unslick');
        };
    }, []);


    return(
        <div className="container">
            <div className="pm-section">
                <section>
                    <article className="inner-120">
                        <div className="post-slider">
                            <div className="post-wrapper">
                                <div className="post">
                                    <img src={banner2} alt="banner2"/>
                                </div>
                                <div className="post">
                                    <img src={banner3} alt="banner3"/>
                                </div>
                                <div className="post">
                                    <img src={banner4} alt="banner4"/>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="popular">
                    <article className="inner-120">
                        <h2>인기 급상승🔥</h2>
                        <div>

                        </div>
                        <button className="more"></button>
                    </article>
                </section>
                <section>
                    <article className="inner-120">
                        <h2>반려견 상식</h2>
                    </article>
                </section>
                <section>
                    <article className="inner-120">
                        <h2>베스트 상품</h2>
                    </article>
                </section>
                <section>
                    <article className="inner-120"></article>
                </section>
            </div>
        </div>
    )
}

export default Home


