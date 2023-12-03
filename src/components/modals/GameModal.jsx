import React from "react";

export const GameModal = ({ children, setIsModal, isModal }) => {
    const closeModal = e => {
        if (e.target.id === "modal") {
            setIsModal(false);
        }
    };

    return (
        <>
            {isModal && (
                <div
                    id="modal"
                    onClick={closeModal}
                    className={
                        " absolute inset-0 flex justify-center items-center overflow-hidden bg-nightblue-900/90 z-50"
                    }
                >
                    <article className="animate__animated animate__fadeInDown flex flex-col gap-3 relative p-3 mx-4 w-full max-w-[400px] rounded shadow bg-nightblue-700">
                        <span
                            onClick={() => setIsModal(false)}
                            className="text-xl font-light absolute top-3 right-4 cursor-pointer leading-4 p-1"
                        >
                            &times;
                        </span>
                        <h2 className="text-center">Preferences</h2>
                        {children}
                    </article>
                </div>
            )}
        </>
    );
};
