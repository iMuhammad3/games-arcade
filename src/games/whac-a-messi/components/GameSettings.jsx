import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { Select } from "../../../components/select/Select";
import { SettingOption } from "../../../components/helpers/SettingOption";

export const GameSettings = ({ setFile, difficulty, setDifficulty }) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <SettingOption className="row-center">
                    <p>Difficulty: </p>
                    <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="super-easy">Super Easy</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        <option value="impossible">Impossible</option>
                    </Select>
                </SettingOption>
                <SettingOption className="row-center">
                    <p>Choose a picture to whac: </p>
                    <div>
                        <input
                            accept="image/*"
                            onChange={e => setFile(e.target.files[0])}
                            id="file-input"
                            type="file"
                            hidden
                        />
                        <label
                            htmlFor="file-input"
                            className="bg-nightblue-800 px-2 py-1 rounded cursor-pointer"
                        >
                            Choose a file
                        </label>
                    </div>
                </SettingOption>
            </GameModal>
        </>
    );
};
