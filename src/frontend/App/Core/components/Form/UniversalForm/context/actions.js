import { actionTypes } from "./actionTypes";

export const createActions = (state, dispatch) => {
    const setformInputs = (formInputs) => {
        dispatch({
            type: actionTypes.SET_FORM_INPUTS,
            formInputs,
        });
    };

    const setFormInput = (formInput) => {
        const formInputs = state.formInputs.map((input) => {
            return formInput.id === input.id ? formInput : input;
        });
        setformInputs(formInputs);
    };

    return {
        setformInputs,
        setFormInput,
    };
};
