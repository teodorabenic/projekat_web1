import { loginFailure, loginStart, loginSuccess, logoutSuccess, registerStart, registerSuccess, registerFailure, } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logout = async(dispatch, user) => {
    dispatch(logoutSuccess(user));
}

export const register = async(dispatch, user) => {
    dispatch(registerStart());
    console.log(user);
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        console.log(err);
        dispatch(registerFailure());
    }
};