import React, {useEffect , useRef} from "react";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import styled from "styled-components";
import $ from "jquery";
import "slick-carousel";



export function Banner(){

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = $(sliderRef.current);
        if (slider) {
            slider.slick({
                slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
                slidesToScroll: 1, // 한 번에 이동할 슬라이드 개수
                dots: true, // 슬라이드 아래 점 표시
                autoplay: true, // 자동으로 슬라이드
                arrows: true, // 좌우 화살표 표시
                autoplaySpeed: 2000, // 슬라이드 전환 속도
                fade: true, // 슬라이드 전환 시 페이드 효과
            });

            return () => {
                // 컴포넌트가 언마운트될 때 슬라이더 초기화 해제
                if (slider) {
                    slider.slick("unslick");
                }
            };
        }
    }, []);


    return (
        <BannerWrapper>
            <div className="post-wrapper" ref={sliderRef}>
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
        </BannerWrapper>
    )

}

const BannerWrapper = styled.div`
    .post-wrapper{
        width: 100%;
        margin: 0 auto;
        
    }
    .post-wrapper .post{
        height: 130px;
        display: block;
        border-radius: 20px;
        overflow: hidden;
        background : linear-gradient(to bottom ,#ffffff , #f1f1f1);
    }
    
    .post-wrapper .post img{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }
    .post-wrapper .slick-dots{
        position: absolute !important;
        bottom: 0;
    }
    .post-wrapper .slick-dots li button:before{
        font-size: 10px
    }
    
`