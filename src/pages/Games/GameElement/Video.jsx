import React, { useState } from "react";

export const Video = ({ video }) => {
    const [loaded, setLoaded] = useState(false);
    const placeholder = (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600 to-sky-700 grid place-items-center text-lg">Loading preview...</div>
    );
    return (
        <>
            {!loaded && placeholder}
            <video
                onMouseEnter={e => {
                    e.target.currentTime = 0;
                    e.target.play();
                }}
                onMouseLeave={e => {
                    e.target.pause();
                    e.target.currentTime = 0;
                }}
                onLoadedData={() => setLoaded(true)}
                className=" w-full"
                playsInline
                loop
                muted
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    );
};
