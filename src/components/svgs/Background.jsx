import React from "react";

export const Background = () => {
    return (
        <div className="absolute bottom-0 right-0 overflow-hidden">
            <svg
                id="visual"
                viewBox="0 0 1280 800"
                width="1280"
                height="800"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
            >
                <defs>
                    <filter
                        id="blur1"
                        x="-10%"
                        y="-10%"
                        width="120%"
                        height="120%"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        ></feBlend>
                        <feGaussianBlur
                            stdDeviation="224"
                            result="effect1_foregroundBlur"
                        ></feGaussianBlur>
                    </filter>
                </defs>
                <rect width="1280" height="800" fill="#0a1325"></rect>
                <g filter="url(#blur1)">
                    <circle cx="1136" cy="557" fill="#1b284c" r="498"></circle>
                    <circle cx="300" cy="17" fill="#0a1325" r="498"></circle>
                    <circle cx="844" cy="462" fill="#1b284c" r="498"></circle>
                    <circle cx="920" cy="187" fill="#1b284c" r="498"></circle>
                    <circle cx="173" cy="607" fill="#0a1325" r="498"></circle>
                    <circle cx="32" cy="179" fill="#1b284c" r="498"></circle>
                </g>
            </svg>
        </div>
    );
};
