
import './assets/css/common.css';
import {Home} from "./components/Home.jsx";
import {Route,  Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Board from "./components/Board.jsx";
function App() {

  return (
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/board/board" element={<Board/>}/>

              </Route>
          </Routes>

  )
}

export default App
