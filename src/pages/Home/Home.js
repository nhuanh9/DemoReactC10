
import {Outlet} from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Home.css'

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <hr/>
            <div className={'box'}>
                <div className="head">
                    <Header/>
                </div>
                <div className="foot">
                    <Footer/>
                </div>
            </div>
            <Outlet/>
        </>
    )
}