/** @format */

import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispathch) => {
    try {
        dispathch({ type: "lodUserRequest" });

        const { data } = await axios.get(`${server}/me`, {
            withCredentials: true,
        });

        dispathch({ type: "lodUserSuccess", payload: data.user });
    } catch (error) {
        dispathch({
            type: "lodUserFail",
            payload: error.response.data?.message,
        });
    }
};

export const logout = () => async (dispathch) => {
    try {
        dispathch({ type: "logoutRequest" });

        await axios.get(`${server}/logout`, {
            withCredentials: true,
        });

        dispathch({ type: "logoutSuccess" });
    } catch (error) {
        dispathch({
            type: "logoutFail",
            payload: error.response.data?.message,
        });
    }
};
