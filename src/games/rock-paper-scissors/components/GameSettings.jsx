import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { SettingOption } from "../../../components/helpers/SettingOption";
import { Select } from "../../../components/select/Select";
import { SET_MAX_ROUND } from "./GameReducer";


export const GameSettings = ({maxRound, dispatch}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <SettingOption className="row-center">
                    <p>Choose number of rounds:</p>
                    <Select value={maxRound} onChange={(e) => dispatch({type: SET_MAX_ROUND, payload: Number(e.target.value)})} className="border !py-1">
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="7">7</option>
                        <option value="9">9</option>
                        <option value="21">21</option>
                        <option value="50">50</option>
                        <option value="70">70</option>
                        <option value="100">100</option>
                    </Select>
                </SettingOption>
            </GameModal>
        </>
    );
};
