
import React from "react";
import styled from "styled-components";

export function TopicSection({title , children}) {
    return (
        <SectionWrapper>
            <section>
                <article className="inner-120">
                    {title ? <h2>{title}</h2> : children}

                    {!children && <button className="more">더보기</button>}
                </article>
            </section>
        </SectionWrapper>
    )
}


const SectionWrapper = styled.section`
    
    &&:first-child {
        margin-top: 40px;
    }
    
    section {
        
    }
    section h2 {
        margin: 70px 0 26px;
        
    }
    section .inner-120 {
        position: relative;
        margin: 0 auto;
        max-width: 1200px;
    }
`
