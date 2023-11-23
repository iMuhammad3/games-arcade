import { Paper } from "../../components/svgs/Paper";
import { Rock } from "../../components/svgs/Rock";
import { Scissors } from "../../components/svgs/Scissors";
import { SvgContainer } from "./components/SvgContainer";

const Game = () => {
    const SVGs = [<Rock />, <Paper />, <Scissors />]
    const randomSVG = SVGs[Math.floor(Math.random() * 3)]
    return (
        <div className="center-game !justify-normal">
            <div className="mt-20 flex flex-col items-center justify-between h-52 w-full max-w-[550px]">
                <h1 className="text-center">Round 0 of 30</h1>
                <div className="flex gap-20 select-none">
                    <Section>
                        <h2>Your score: 0</h2>
                        <div className="flex gap-2">
                            <SvgContainer>
                                <Rock />
                            </SvgContainer>
                            <SvgContainer>
                                <Paper />
                            </SvgContainer>
                            <SvgContainer>
                                <Scissors />
                            </SvgContainer>
                        </div>
                    </Section>
                    <Section>
                        <h2>Computer's score: 0</h2>
                        <div className="flex gap-2">
                            <SvgContainer computer={true}>
                                {randomSVG}
                            </SvgContainer>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

const Section = ({ children }) => {
    return <section className="flex flex-col items-center gap-3">{children}</section>;
};

export default Game;
