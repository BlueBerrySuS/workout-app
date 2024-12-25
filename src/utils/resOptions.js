import { instance } from "./instance.js"

export const regUser = async ({name,surname, email, password}) => {
    console.log(name,surname, email, password)
    try {
        const res = await instance.post("auth/register/", {
            first_name: name,
            last_name: surname,
            email: email,
            password: password
        })
        return res.data;
    } catch(error) {
        throw new Error(error);
    }
}

export const logUser = async ({email, password}) => {
    console.log(email, password)
    try {
        const res = await instance.post("auth/login", {email, password})
        return res.data;
    } catch(error) {
        throw new Error(error);
    }
}

export const getProfile = async ({token}) => {
}

export const getExercises = async ({token}) => {
    try {
        const res = await instance.get("exercises", {headers: {Authorization: `Bearer ${token}`}})
        return res.data
    } catch(error) {
        throw new Error(error)
    }
}

export const createExercise = async ({name, times, iconUrl, token}) => {
    try {
        const res = await instance.post("exercises", {
            name: name,
            times: Number(times),
            iconPath: `/uploads/exercisess/${iconUrl}.svg`
        }, 
        {headers: {
            Authorization: `Bearer ${token}`
            }
        })

        return res.data;
    } catch(error) {
        throw new Error(error);
    }
}

export const deleteExercise = async ({id, token}) => {
    try {
        const res = await instance.delete(`exercise/${id}`, {headers: {
        Authorization: `Bearer ${token}`}
        })
        return res
    } catch(error) {
        throw new Error(error)
    }
}

export const getWorkout = async ({id, token}) => {
    try {
        const res = await instance.get(`workouts/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        return res
    } catch(error) {
        throw new Error(error);
    }
}

export const getWorkouts = async ({token}) => {
    try {
        const res = await instance.get("workouts", {headers: {Authorization: `Bearer ${token}`}})
        return res
    } catch(error) {
        throw new Error(error)
    }
} 

export const createWorkout = async ({name, ids, token}) => {
    console.log(name, ids, token)
    const id = []
    ids.map(idd => {
        id.push(Number(idd))
    })
    try {
        const res = await instance.post("workouts", {
            name: name,
            exerciseIds: JSON.stringify(id)
        },
        { headers: {
            Authorization: `Bearer ${token}`
            }
        })

        return res.data
    } catch(error) {
        throw new Error(error)
    }
}