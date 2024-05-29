import './App.css';
import CountPage from "./pages/countPage/CountPage";
import PostsPage from "./pages/postPage/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/counter" element={<CountPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
