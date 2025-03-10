
import './assets/css/common.css';
import {Home} from "./components/Home.jsx";
import {Route,  Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Board from "./components/Board.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Login} from "./components/Login.jsx";
import {Profile} from "./components/Profile.jsx";

function App() {

  return (
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/board/board" element={<Board/>}/>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/users/me" element={<Profile/>}></Route>
              </Route>
          </Routes>

  )
}

export default App
