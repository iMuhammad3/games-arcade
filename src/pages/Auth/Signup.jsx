import FormInput from "../../components/Inputs/AuthInput";
import Heading1 from "../../components/Headings/Heading1";
import Button from "../../components/Buttons/AuthButton";
import { useState } from "react";
import InputSection from "./InputSection";
import Anchor from "./Anchor";

const Signup = ({ setHasAccount }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmedPassword) {
            setMessage("Passwords don't match");
            return;
        } else {
            setHasAccount(true);
        }
    };

    const anchorClick = () => {
        setHasAccount(true)
    }

    return (
        <>
            <Heading1>Sign Up</Heading1>
            <Button>Sign Up With Google 👍</Button>
            <div className="flex flex-col items-center gap-1">
                <Line />
                <h1 className="text-xl">OR</h1>
                <Line />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <InputSection>
                    <p>Enter your email: </p>
                    <FormInput
                        value={username}
                        handleChange={e => setUsername(e.target.value)}
                        placeholder="yourEmail@gmail.com"
                    />
                </InputSection>
                <InputSection>
                    <p>Create password: </p>
                    <FormInput
                        value={password}
                        handleChange={e => setPassword(e.target.value)}
                        placeholder="**************"
                        type="password"
                    />
                </InputSection>
                <InputSection>
                    <p>Confirm password: </p>
                    <FormInput
                        value={confirmedPassword}
                        handleChange={e => setConfirmedPassword(e.target.value)}
                        placeholder="**************"
                        type="password"
                    />
                </InputSection>
                <Button className="self-start">Sign Up</Button>
            </form>
            {message && (
                <p className="text-center p-1 rounded border border-red-500 text-red-500">
                    {message}
                </p>
            )}
            <p className="text-center">Already have an account? <Anchor handleClick={anchorClick}>Log In</Anchor></p>
        </>
    );
};

const Line = () => {
    return (
        <div className="h-0.5 w-10 rounded bg-midnightblue dark:bg-slate-100"></div>
    );
};

export default Signup;
