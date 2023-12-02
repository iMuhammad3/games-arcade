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
                        "absolute inset-0 flex justify-center items-center overflow-hidden bg-black/40 z-50"
                    }
                >
                    <article className="flex flex-col gap-3 relative p-3 w-96 rounded shadow bg-nightblue-700">
                        <span
                            onClick={() => setIsModal(false)}
                            className="absolute top-6 right-8 cursor-pointer"
                        >
                            x
                        </span>
                        <h1 className="text-center">Settings</h1>
                        {children}
                    </article>
                </div>
            )}
        </>
    );
};
