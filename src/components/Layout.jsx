import {Header} from "./Header.jsx";
import {Navbar} from "./Navbar.jsx";
import {Footer} from "./Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";
import styled from "styled-components";


const Layout = () =>{
    const location = useLocation();
    const isExcludedRoute = location.pathname.startsWith('/login') || location.pathname.startsWith('/users');

    return(
        <>
            <Header/>
            {!isExcludedRoute && <Navbar />} {/* '/login' 또는 '/users' 경로에서 Navbar 숨기기 */}
            <Container>
                <ContentLayout>
                    <Outlet/>
                </ContentLayout>
            </Container>
            <Footer/>
        </>
    )
}

export default Layout;

const Container = styled.div`
    padding-top: 90px;
    min-height: 100vh;
`

const ContentLayout = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 80px
`