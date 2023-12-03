import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { Select } from "../../../components/select/Select";
import "./GameSettings.css";
import { SettingOption } from "../../../components/helpers/SettingOption";

export const GameSettings = ({ colors, setColors, difficulty, setDifficulty }) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <SettingOption>
                    <p>Difficulty: </p>
                    <Select className="border !py-1" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Select>
                </SettingOption>
                <SettingOption>
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
                </SettingOption>
            </GameModal>
        </>
    );
};
