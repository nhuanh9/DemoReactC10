import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin";
import List from "./pages/product/List";
import Create from "./pages/product/Create";
import Detail from "./pages/product/Detail";

function App() {
    return (
        <>
            <p>Hahaha</p>
            <Routes>
                <Route path={'home'} element={<Home/>}>
                    <Route path={'list'} element={<List/>}/>
                    <Route path={'create'} element={<Create/>}/>
                    <Route path={'detail/:id'} element={<Detail/>}/>
                </Route>
                <Route path={'admin'} element={<Admin/>}/>
            </Routes>
        </>
    );
}

export default App;
