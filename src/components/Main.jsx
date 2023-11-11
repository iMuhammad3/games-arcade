import Game from "./Game";
import SearchInput from "./Input";

function Main() {
    return (
        <main className="py-10 px-16 flex flex-col gap-6">
            <SearchInput forHeader={false} />
            <ul className="flex justify-center flex-wrap gap-6">
                <Game />
                <Game />
                <Game />
            </ul>
        </main>
    );
}

export default Main;
