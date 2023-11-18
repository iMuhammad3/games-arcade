import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
    const [hasAccount, setHasAccount] = useState(false);

    return (
        <div className="select-none flex justify-center items-center min-h-screen ">
            <div className="flex flex-col gap-6 bg-slate-800 border-2 rounded-md p-9 md:w-[450px]">
                {hasAccount ? (
                    <Login setHasAccount={setHasAccount} />
                ) : (
                    <Signup setHasAccount={setHasAccount} />
                )}
            </div>
        </div>
    );
};

export default Auth;
