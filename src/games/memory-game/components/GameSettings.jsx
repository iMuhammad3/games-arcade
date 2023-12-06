import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { SettingOption } from "../../../components/helpers/SettingOption";
import { Select } from "../../../components/select/Select";

export const GameSettings = ({difficulty, setDifficulty}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <SettingOption className="row-center">
                    <p>Difficulty: </p>
                    <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="border !py-1">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Select>
                </SettingOption>
                <SettingOption className="row-center">
                    <p>Image Category: </p>
                    <Select>
                        
                    </Select>
                </SettingOption>
            </GameModal>
        </>
    );
};
