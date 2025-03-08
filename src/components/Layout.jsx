import {Header} from "./Header.jsx";
import {Navbar} from "./Navbar.jsx";
import {Footer} from "./Footer.jsx";
import {Outlet} from "react-router-dom";

const Layout = () =>{

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;