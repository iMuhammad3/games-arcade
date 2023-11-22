import React from "react";
import Header from "../../components/Header/Header";
import layeredWaves from '../../assets/layered-waves.png'
import Main from "./Main";

import "./home.css";

const Home = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <Main />
            {/* background image */}
            <img
                // target id in css file
                id="background"
                src={layeredWaves}
                alt=""
            />
        </div>
    );
};

export default Home;
