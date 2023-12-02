import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { Select } from "../../../components/select/Select";
import './GameSettings.css'

export const GameSettings = () => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <section className="flex items-center justify-between">
                    <p>Word Length: </p>
                    <Select className="border !py-1">
                        <option>Short</option>
                        <option>Medium</option>
                        <option>Long</option>
                    </Select>
                </section>
                <section>
                    <p className="text-lg">Colors: </p>
                    <ul className="color-settings">
                        <li>
                            <p>Correct Letter: </p>
                            <input type="color" />
                        </li>
                        <li>
                            <p>Wrong Letter: </p>
                            <input type="color" />
                        </li>
                        <li>
                            <p>Default Letter: </p>
                            <input type="color" />
                        </li>
                    </ul>
                </section>
            </GameModal>
        </>
    );
};
