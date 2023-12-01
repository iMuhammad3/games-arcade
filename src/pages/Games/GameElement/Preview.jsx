import React, { useState } from "react";

export const Preview = ({ video, img }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isMobile = /mobi|android/i.test(navigator.userAgent);

    const placeholder = (
        <div className="absolute inset-0 bg-gradient-to-tr from-nightblue-800 to-nightblue-900 grid place-items-center text-lg">
            Waiting for preview...
        </div>
    );
    return (
        <>
            {isMobile ? (
                <>
                    {!isLoaded && placeholder}
                    <img
                        src={img}
                        alt=""
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />
                </>
            ) : (
                <>
                    {!isLoaded && placeholder}
                    <video
                        onMouseEnter={e => {
                            e.target.currentTime = 0;
                            e.target.play();
                        }}
                        onMouseLeave={e => {
                            e.target.pause();
                            e.target.currentTime = 0;
                        }}
                        onLoadedData={() => setIsLoaded(true)}
                        className=" w-full"
                        playsInline
                        loop
                        muted
                        loading="lazy"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </>
            )}
        </>
    );
};
