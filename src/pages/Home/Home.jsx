import React from "react";
import Header from "../../components/Header/Header";
import Main from "./Main";

const Home = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <Main />
        </div>
    );
};

export default Home;
