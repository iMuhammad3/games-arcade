import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { Select } from "../../../components/select/Select";
import "./GameSettings.css";

export const GameSettings = ({ colors, setColors }) => {
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
                            <input
                                type="color"
                                value={colors.correct}
                                onChange={e =>
                                    setColors(prev => ({
                                        ...prev,
                                        correct: e.target.value,
                                    }))
                                }
                            />
                        </li>
                        <li>
                            <p>Wrong Letter: </p>
                            <input
                                type="color"
                                value={colors.wrong}
                                onChange={e =>
                                    setColors(prev => ({
                                        ...prev,
                                        wrong: e.target.value,
                                    }))
                                }
                            />
                        </li>
                        <li>
                            <p>Default Letter: </p>
                            <input
                                type="color"
                                value={colors.default}
                                onChange={e =>
                                    setColors(prev => ({
                                        ...prev,
                                        default: e.target.value,
                                    }))
                                }
                            />
                        </li>
                    </ul>
                </section>
            </GameModal>
        </>
    );
};
