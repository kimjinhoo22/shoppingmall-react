import React, { useState } from 'react';
import userDefaultImg from '../assets/images/user_default.png';
import CouponImg from '../assets/images/coupon4.png';
import CartImg from '../assets/images/cart3.png';
import DeliveryImg from '../assets/images/delivery2.png';
import styled from "styled-components";

// 메인 프로필 컴포넌트
export function Profile() {
    // 현재 선택된 메뉴 상태 관리
    const [selectedMenu, setSelectedMenu] = useState('basic'); // 'basic', 'activities', 'userInfo'

    // 메뉴 선택 핸들러
    const handleMenuClick = (menuType) => {
        setSelectedMenu(menuType);
    };

    // 선택된 메뉴에 따라 적절한 컴포넌트 렌더링
    const renderRightContent = () => {
        switch (selectedMenu) {
            case 'basic':
                return <BasicInfoSection />;
            case 'activities':
                return <UserActivitiesSection />;
            case 'userInfo':
                return <UserInfoSection />;
            default:
                return <BasicInfoSection />;
        }
    };

    return (
        <ProfileWrapper>
            <div className="mypage-top">
                <div className="user">
                    <div className="img">
                        <img src={userDefaultImg} alt="기본 프로필" />
                    </div>
                    <strong className="nickname"></strong>
                    <button type="button" className="profile_btn">설정</button>
                </div>
                <div className="mypage_top_content">
                    <div className="inner-wrap">
                        <div className="inner">
                            <div className="inner-img">
                                <img src={CouponImg} />
                                <span className="quantity coupon"></span>
                            </div>
                            <h3>쿠폰</h3>
                        </div>
                        <div className="inner">
                            <div className="inner-img">
                                <img src={CartImg} />
                                <span className="quantity cartQuantity"></span>
                            </div>
                            <h3>장바구니</h3>
                        </div>
                        <div className="inner">
                            <div className="inner-img">
                                <img src={DeliveryImg} />
                                <span className="quantity delivery">2</span>
                            </div>
                            <h3>배송중</h3>
                        </div>
                    </div>

                    <div className="inner-rig">
                        <p>
                            쿠폰
                            <strong>0개</strong>
                        </p>
                        <p>
                            적립금
                            <strong>0P</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mypage-bottom-content">
                <div className="left">
                    <ul className="my-menu">
                        <li>
                            <span>마이페이지 홈</span>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick('basic');
                                }}
                            >
                                기본 정보
                            </a>
                        </li>
                        <li>
                            <span>커뮤니티</span>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick('activities');
                                }}
                            >
                                나의 활동
                            </a>
                        </li>
                        <li>
                            <span>나의 쇼핑 정보</span>
                            <a href="/users/me/orders">주문/배송</a>
                            <a href="/users/me/likes">교환/반품</a>
                            <a href="#">찜한제품</a>
                            <a href="/users/me/reviews">제품리뷰</a>
                        </li>
                        <li>
                            <span>나의 반려 동물</span>
                        </li>
                        <li>
                            <span>쿠폰/적립금</span>
                            <a href="/users/me/coupons">쿠폰</a>
                            <a href="/users/me/points">적립금</a>
                        </li>
                        <li>
                            <span>나의 정보</span>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick('userInfo');
                                }}
                            >
                                회원 정보 관리
                            </a>
                        </li>
                        <li>
                            <span>고객센터</span>
                            <a href="#">고객센터</a>
                            <a href="#">문의내역</a>
                        </li>
                    </ul>
                </div>

                {/* 여기가 바뀌는 부분 */}
                {renderRightContent()}
            </div>
        </ProfileWrapper>
    );
}

// 기본 정보 섹션 (반려동물 + 좋아요한 제품)
const BasicInfoSection = () => {
    return (
        <div className="right_info">
            <PetSection />
            <LikedProducts />
        </div>
    );
};

// 반려동물 섹션 컴포넌트
const PetSection = () => {
    return (
        <>
            <h2>진후님의 반려동물</h2>
            <a className="new_pet" href="/pets">펫 등록</a>
            <div className="animal_list">
                <div className="last-div">
                    <a href="/pets" className="profile_add">프로필 추가</a>
                </div>
            </div>
        </>
    );
};

// 좋아요한 제품 컴포넌트
const LikedProducts = () => {
    return (
        <div className="like_area">
            <h2 className="border">좋아요한 제품</h2>
            <a href="#" className="more">더보기</a>
            <ul className="product_list">
                {/* 제품 목록 */}
            </ul>
        </div>
    );
};

// 회원 정보 관리 섹션
const UserInfoSection = () => {
    return (
        <div className="right_info">
            <div className="sign-wrap">
                <section className="user_details_section">
                    <h2 className="border">회원 정보</h2>
                    <div className="field">
                        <h5>닉네임</h5>
                        <div className="result user-nickname"></div>
                    </div>
                    <div className="field">
                        <h5>이메일</h5>
                        <div className="result user-email"></div>
                    </div>
                    <div className="field">
                        <h5>주소</h5>
                        <div className="result user-address"></div>
                    </div>
                    <div className="field">
                        <h5>가입 날짜</h5>
                        <div className="result user-created"></div>
                    </div>
                    <div className="field">
                        <h5>회원 분류</h5>
                        <div className="result user-type"></div>
                    </div>
                </section>
                <UserAgreementSection />
            </div>
        </div>
    );
};

// 마케팅 수신 동의 설정 컴포넌트
const UserAgreementSection = () => {
    return (
        <section className="user_agreement_section">
            <div className="user_agreement">
                <h2 className="border">마케팅 수신 동의 설정</h2>
                <ul className="product_list"></ul>
            </div>
        </section>
    );
};

// 사용자 활동 섹션
const UserActivitiesSection = () => {
    // 활동 탭 상태 관리
    const [activeTab, setActiveTab] = useState('boards');

    return (
        <div className="right_info">
            <h2 className="border_none">나의 활동</h2>
            <article className="consult__tab">
                <ul className="tab">
                    <li>
                        <a
                            className={activeTab === 'boards' ? 'active' : ''}
                            onClick={() => setActiveTab('boards')}
                        >
                            작성한 글
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeTab === 'comments' ? 'active' : ''}
                            onClick={() => setActiveTab('comments')}
                        >
                            댓글단 글
                        </a>
                    </li>
                    <li>
                        <a
                            className={activeTab === 'likes' ? 'active' : ''}
                            onClick={() => setActiveTab('likes')}
                        >
                            좋아요한 글
                        </a>
                    </li>
                </ul>
            </article>
            <div className="activities_content">
                <ul>
                    {/* 각 탭에 맞는 활동 내용 렌더링 */}
                    {renderActivitiesList(activeTab)}
                </ul>
            </div>
        </div>
    );
};

// 활동 목록 렌더링 함수
const renderActivitiesList = (type) => {
    switch (type) {
        case 'boards':
            return (
                <>
                    {/* 작성한 글 목록 */}
                </>
            );
        case 'comments':
            return (
                <>
                    {/* 댓글단 글 목록 */}
                </>
            );
        case 'likes':
            return (
                <>
                    {/* 좋아요한 글 목록 */}
                </>
            );
        default:
            return null;
    }
};



const ProfileWrapper = styled.div`
    .mypage-top{
        display: flex;

    }
    .user .img{
        overflow: hidden;
        display: flex;
        width: 70px;
        height: 70px;
        margin: 0 auto 16px;
        text-align: center;
        border-radius: 50%; /* 원형 모양 */
        background-color: #F6F6F6;
        justify-content: center;
        align-items: center;

    }
    .user .img img{
        width: 80%; /* 이미지가 80%만 차지하도록 설정 */
        height: 80%; /* 이미지가 80%만 차지하도록 설정 */
        object-fit: contain; /* 이미지를 잘리지 않게 비율을 맞추도록 설정 */
        object-position: center;
    }

    .user strong{
        display: block;
        margin: 4px 0 12px;
        font-size: 20px;
        font-weight: 600;
        line-height: 130%;
    }
    .user > button{
        color: #9A9A9A;
        line-height: 100%;
        border-bottom: 1px solid #9A9A9A;
        background: none;
    }

    .user{
        position: relative;
        width: 170px;
        height: 223px;
        margin-right: 30px;
        padding: 30px 0 0;
        text-align: center;
        border-radius: 13px;
        border: 1px solid #D9D9D9;
    }

    .mypage_top_content{
        display: flex;
        align-items: center;
        width: 100%;
        height: 223px;
        border-radius: 15px;
        background-color: #E3EFFF;
    }

    .inner-wrap{
        display: flex;
        justify-content: left;
        width: 577px;
    }
    .inner{
        width: 173px;
        border-left: 0;
        text-align: center;
        position: relative;
    }
    .inner span{
        display: block;
        font-size: 20px;
    }
    .inner h3{
        margin-top: 8px;
    }
    .inner .inner-img{

        overflow: hidden;
        margin: 0 auto;
        width: 70px;
        height: 70px;
    }
    .inner .inner-img img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .inner-img .quantity{
        display: inline-block;
        width: 35px;
        height: 35px;
        z-index: 3;
        position: absolute;
        top: 0; /* 상단에서의 위치 */
        right:40px;
        line-height: 35px;
        background-color: #FF5F5F;
        color: white;
        border-radius: 50%;
    }

    .mypage_top_content .inner strong{
        margin-top: 10px;
        font-size: 28px;
        font-weight: 600;
    }

    .inner-rig{
        flex: 1;
        margin-right: 60px;
    }
    .inner-rig p{
        font-size: 20px;
        line-height: 130%;
    }

    .inner-rig p strong{
        float: right;
        font-size: 26px;
        font-weight: 600;
    }

    .inner-rig p + p {
        margin-top: 18px;
        padding-top: 18px;
        border-top: 1px solid #C3D2E5;
    }

    .mypage-bottom-content{
        display: flex;
        margin-top: 37px;
    }

    .mypage-bottom-content > .left{
        width: 200px;
    }
    .mypage-bottom-content .left ul li{
        margin-bottom: 26px;
    }

    .mypage-bottom-content .left ul li span{
        display: block;
        margin-bottom: 13px;
        font-size: 17px;
        font-weight: 600;
    }

    .mypage-bottom-content .left ul li a{
        display: block;
        margin-bottom: 13px;
        font-size: 15px;
    }

    a{
        text-decoration: none;
        color: currentColor;
        cursor: pointer;
    }

    /* 모달 기능 */

    .modal {
        display: none; /* 기본적으로 숨김 */
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* 모달 내부 컨텐츠 */
    .modal-content {
        background-color: #fff;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 300px;
        border-radius: 8px;
        text-align: center;
    }

    /* 닫기 버튼 */
    .close {
        float: right;
        font-size: 25px;
        cursor: pointer;
    }

    /* 입력 필드 & 버튼 스타일 */
    #newNickname {
        width: 100%;
        padding: 8px;
        margin-top: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    #saveNickname {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background-color: #4e9eff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #saveNickname:hover {
        background-color: #ff6347;
    }

    .modal-content .head{
        border-bottom: 1px solid #e3e3e3 ;
    }
    .modal-content h2{
        padding: 10px 0 10px;
    }

    .profile-default {
        margin: 30px auto;
        border-radius: 50%; /* 부모 요소에 동그란 테두리 설정 */
        border: 1px solid #e3e3e3; /* 동그란 테두리 */
        width: 100px; /* 원하는 크기 설정 */
        height: 100px; /* 원하는 크기 설정 */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden; /* 부모 영역에서 이미지 잘리게 설정 */
    }

    .profile-default img {
        width: 80%; /* 부모 요소에 맞게 이미지 크기 설정 */
        height: 80%; /* 부모 요소에 맞게 이미지 크기 설정 */
        object-fit: contain; /* 이미지를 잘리지 않게 비율을 맞추도록 설정 */
        object-position: center;
    }

    /* 찜한제품 css */


    .product_list {
        display: flex;
        flex-wrap: wrap;
    }

    .product_list li {
        position: relative;
        margin-bottom: 50px;
        margin-right: 17px;
    }

    .like_area .product_list li{
        width: 226px;
    }

    .like_area .product_list li .img{
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 226px;
        height: 226px;
        margin-bottom: 10px;
        border-radius: 7px;
    }
    .like_area .product_list li .img img{
        width: 226px;
        height: 226px;
    }
    .pro_name > span:first-child{
        margin-top: 10px;
        color: #808080;
        font-size: 12px;
        line-height: 130%;
    }
    .pro_name p {
        margin: 2px 0 4px;
        color: #343434;
        font-weight: 500;
        font-size: 15px;
        line-height: 130%;
    }
    .pro_name .rate {
        margin-right: 10px;
        padding-left: 20px;
        font-weight: 600;
        font-size: 13px;
        line-height: 130%;
        background: url("../assets/images/star.png") no-repeat left center;
        background-size: 15px;
    }

    .product_list li .heart.active {
        background-image: url(../assets/images/heart.png);
    }

    .like_area .product_list li .heart {
        width: 28px;
        height: 28px;
        background-size: 28px;
    }

    .product_list li .heart {
        position: absolute;
        top: 16px;
        right: 16px;
        text-indent: -9999px;
        cursor: pointer;
        background: url("../assets/images/heart-blank.png")

    }

    .pro_name .review_count{
        margin-bottom: 4px;
        font-weight: 500;
        font-size: 12px;
        line-height: 130%;
    }
    .review_count{
        margin-top: 30px;
    }




    .new_pet{
        position: relative;
        float: right;
        margin-top: -67px;
        color: #68A5FE;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
    .new_pet::before {
        content: '';
        display: inline-block;
        vertical-align: -2px;
        width: 18px;
        height: 18px;
        margin-right: 7px;
        background: url(https://img.lifet.co.kr/icon/icon_plus.png) no-repeat center center;
        background-size: 100%;
    }

    .animal_list{
        margin-bottom: 40px;
        display: flex;
        flex-wrap: wrap;
    }
    .animal_list > div:last-child {
        position: relative;
        padding: 0;
        box-shadow: none;
    }

    .animal_list .layer_open{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        text-indent: -9999px;
        border: 0;
        cursor: pointer;
        background: url(../images/settings.png) no-repeat center center;
        background-size: 100%;
    }

    .animal_list .last-div .profile_add{
        display: inline-block;
        width: 202px;
        height: 248px;
        padding-top: 167px;
        color: #cecece;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        box-shadow: 0 0 16px rgba(0,0,0,0.08);
        background: #fff url("../images/plus.png") no-repeat center;  /* 수정된 부분 */
        background-size: 70px;  /* 이미지 크기 조절 */
        background-position-y: 70px;
        border-radius: 15px;
    }
    .animal_list .box{
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;
        align-items: center;
        width: 202px;
        height: 248px;
        margin: 0 20px 20px 0;
        padding: 32px 31px;
        text-align: center;
        box-shadow: 0 0 15px rgba(0,0,0,0.08);
        border-radius: 15px;
        background-color: #fff;
    }
    .animal_list .box .name{
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
    }

    .animal_list .box .img{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }
    .animal_list .box img{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
    }

    .animal_list .box .layer_modify {
        width: 95px;
        padding: 5px;
        right: -55px;
        top: 44px;
    }
    .animal_list .box .layer_modify li {
        padding: 5px 5px;
    }
    .animal_list .box .layer_modify li:hover {
        background-color: #e3e3e3;
    }
    .animal_list .box .layer_modify li a {
        width: 100%;
    }
    .animal_list .box .layer_modify .deleteBtn{
        color: red;
    }
    .layer_modify{
        z-index: 100000;
        position: absolute;
        border: 1px solid #f0f0f0;
        box-shadow: 0 0 8px rgba(0,0,0,0.1);
        border-radius: 4px;
        background-color: #fff;
    }


    .mypage-bottom-content .right_info h2.border{
        padding-bottom: 14px;
        border-bottom: 2px solid #e3e3e3;
    }

    .like_area{
        position: relative;
    }

    .more{
        position: absolute;
        right: 0;
        top: 2px;
        padding-right: 22px;
        font-weight: 500;
        font-size: 18px;
        background: url(https://img.lifet.co.kr/icon/mypage_arrow.svg) no-repeat right 6px center;
        background-size: 8px;
    }


    .mypage-bottom-content .right_info{
        width: 100%;
    }

    .mypage-bottom-content .right_info h2{
        display: block;
        padding-bottom: 0;
        font-size: 20px;
        border: 0;
    }
    .mypage-bottom-content h2{
        margin-bottom: 30px;
        font-weight: 700;
    }


`