import React from "react";
import Header from "../../components/Header/Header";
import layeredPeaks from '../../assets/layered-peaks-haikei.png'
import Main from "./Main";

import "./home.css";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main />
            {/* background image */}
            <img
                // target id in css file
                id="background"
                src={layeredPeaks}
                alt=""
            />
        </div>
    );
};

export default Home;
