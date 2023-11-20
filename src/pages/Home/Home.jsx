import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main";

import './home.css'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main />
            {/* background image */}
            <img id="background" src="src/assets/layered-peaks-haikei.png" alt="" />
        </div>
    );
};

export default Home;
