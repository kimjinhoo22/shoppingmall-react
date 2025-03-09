import React from "react";
import {Banner} from "./Banner.jsx";
import {TopicSection} from "./TopicSection.jsx";



export const Home = ()=> {

    return(<>
                <TopicSection>
                    <Banner/>
                </TopicSection>
                <TopicSection title={"인기 급상승🔥"}/>
                <TopicSection title={"반려견 상식"}/>
                <TopicSection title={"베스트 상품"}/>
                <TopicSection title={"좋아요 좋아요"}/>
          </>


    )
}

export default Home


