import { SvgContainer } from "./components/SvgContainer";
import { useSVG } from "./hooks/useSVG";

const Game = () => {
    const moves = ["rock", "paper", "scissors"]
    const randomSVG = moves[Math.floor(Math.random() * 3)]

    return (
        <div className="center-game !justify-normal">
            <div className="mt-20 flex flex-col items-center justify-between h-52 w-full max-w-[550px]">
                <h1 className="text-center">Round 0 of 30</h1>
                <div className="flex gap-20 select-none">
                    <Section>
                        <h2>Your score: 0</h2>
                        <div className="flex gap-2">
                            {moves.map(move => {
                                const svg = useSVG(move)
                                return <SvgContainer onClick={handleClick}>{svg}</SvgContainer>
                            })}
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
