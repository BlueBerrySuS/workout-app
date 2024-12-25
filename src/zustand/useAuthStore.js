import {create} from "zustand";
import { logUser, regUser } from "../utils/resOptions";


const useAuthStore = create((set, get) => {
    const loadToken = () => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        return token || null;
    };

    return {
        token: loadToken(),
        isLoading: false,

        logUser: async ({ email, password, rememberMe, nav }) => {
            set({ isLoading: true });

            try {
                const res = await logUser({ email, password });
                await get().saveToken(res.token, rememberMe);
                nav()
            } catch (error) {
                throw new Error(error);
            } finally {
                set({ isLoading: false });
            }
        },

        regUser: async ({ name, surname, email, password, rememberMe, nav }) => {
            set({ isLoading: true });

            try {
                const res = await regUser({ name, surname, email, password });
                await get().saveToken(res.token, rememberMe);
                nav("/")
            } catch (error) {
                throw new Error(error);
            } finally {
                set({ isLoading: false });
            }
        },

        logout: () => {
            set({ token: null });
            [localStorage, sessionStorage].forEach(storage => storage.removeItem("token"));
        },

        saveToken: (token, rememberMe) => {
            if (!token) return;
            set({ token });
            rememberMe
                ? localStorage.setItem("token", token)
                : sessionStorage.setItem("token", token);
        },
    };
});


export {useAuthStore}