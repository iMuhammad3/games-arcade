import React from "react";
import Header from "../../components/Header/Header";
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
                src="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/layered-peaks-haikei.png?alt=media&token=339c651b-a1e0-4ddb-b406-148bb23309e1"
                alt=""
            />
        </div>
    );
};

export default Home;
