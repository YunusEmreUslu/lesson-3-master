import { UserActionTypes } from "./user.types";

//gets user, returns an action object
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});