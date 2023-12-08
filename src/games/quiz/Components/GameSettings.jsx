import React, { useState } from "react";
import { GameModal } from "../../../components/modals/GameModal";
import { GearWrapper } from "../../../components/svgs/wrappers/GearWrapper";
import { Select } from "../../../components/select/Select";
import { SettingOption } from "../../../components/helpers/SettingOption";

export const GameSettings = ({
    difficulty,
    setDifficulty,
    categories,
    categoryId,
    setCategoryId,
    questionCount,
    setQuestionCount,
}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <GearWrapper onClick={() => setIsModal(true)} />
            <GameModal isModal={isModal} setIsModal={setIsModal}>
                <SettingOption className="row-center">
                    <p>Difficulty</p>
                    <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Select>
                </SettingOption>
                <SettingOption className="row-center">
                    <p>Category</p>
                    <Select className="w-60" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                        {categories.map(category => {
                            return (
                                <option value={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
                    </Select>
                </SettingOption>
                <SettingOption className="row-center">
                    <p>Number of questions</p>
                    <Select value={questionCount} onChange={(e) => setQuestionCount(e.target.value)}>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </Select>
                </SettingOption>
            </GameModal>
        </>
    );
};
