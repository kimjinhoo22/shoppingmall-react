import styled from "styled-components";


export  function ProfileContent({title1, title2}){


    return (
        <div className="right_info">
            <h2>{title1}</h2>
            <a className="new_pet" href="/pets">펫 등록</a>
            <div className="animal_list">
                <div className="last-div">
                    <a href="/pets" className="profile_add">프로필 추가</a>
                </div>
            </div>
            <div className="like_area">
                <h2 className="border">{title2}</h2>
                <a href="#" className="more">더보기</a>
                <ul className="product_list">

                </ul>
            </div>
        </div>
    )
}


const ProfileContentWrapper = styled.div`

`