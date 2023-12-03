const ACTION_TYPES = {
    SET_MESSAGE: "set_message",
    SET_MAX_ROUND: "set_max_round",
    SET_ROUND: "set_round",
    SET_USER_SCORE: "set_user_score",
    SET_COMPUTER_SCORE: "set_computer_score",
    SET_RANDOM_MOVE: "set_random_move",
    RESET_GAME: "reset_game",
};

export const initialState = {
    message: "",
    round: 1,
    maxRound: 7,
    randomMove: ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)],
    userScore: 0,
    computerScore: 0,
};

export const {
    SET_COMPUTER_SCORE,
    SET_MESSAGE,
    SET_MAX_ROUND,
    SET_RANDOM_MOVE,
    SET_ROUND,
    SET_USER_SCORE,
    RESET_GAME,
} = ACTION_TYPES;

export const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: action.payload };
        case SET_MAX_ROUND:
            return { ...initialState, maxRound: action.payload };
        case SET_ROUND:
            return { ...state, round: action.payload };
        case SET_USER_SCORE:
            return { ...state, userScore: action.payload };
        case SET_COMPUTER_SCORE:
            return { ...state, computerScore: action.payload };
        case SET_RANDOM_MOVE:
            return { ...state, randomMove: action.payload };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
};
