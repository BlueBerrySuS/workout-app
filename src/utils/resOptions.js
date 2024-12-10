import { instance } from "./instance.js"

export const regUser = async ({name,surname, email, password}) => {
    try {
        const res = instance.post("auth/register/", {
            first_name: name,
            last_name: surname,
            email: email,
            password: password
        })
        return res;
    } catch(error) {
        throw new Error(error);
    }
}

export const logUser = async ({email, password}) => {
    try {
        const res = await instance.post("auth/login", {email, password})
        return res;
    } catch(error) {
        throw new Error(error);
    }
}

export const getProfile = async ({token}) => {
}