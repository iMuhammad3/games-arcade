import React from "react";
import Header from "../../components/Header/Header";
import layeredWaves from "../../assets/layered-waves.png";
import Main from "./Main";

import "./home.css";
import { Background } from "../../components/svgs/Background";

const Home = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <Main />
            <Background />
        </div>
    );
};

export default Home;
