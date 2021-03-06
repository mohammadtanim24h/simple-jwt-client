import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/orders" element={<Order></Order>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
