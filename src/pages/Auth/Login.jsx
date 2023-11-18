import Heading1 from "../../components/Headings/Heading1"
import FormInput from "../../components/Inputs/AuthInput"
import Button from "../../components/Buttons/AuthButton"
import { useState } from "react"
import InputSection from "./InputSection"
import Anchor from "./Anchor"

const Login = ({setHasAccount}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const anchorClick = () => {
        console.log("1");
        setHasAccount(false)
        console.log("2");
    }
    return (
        <>
            <Heading1>Log In</Heading1>
            <Button>Log In With Google 👍</Button>
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-xl">OR</h1>
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
                <Button className="self-start">Log in</Button>
            </form>
            <p className="text-center">Don't have an account? <Anchor handleClick={anchorClick}>Sign up</Anchor></p>
        </>
    )
}

export default Login