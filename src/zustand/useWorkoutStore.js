import { create } from "zustand"
import { createExercise, deleteExercise } from "../utils/resOptions"
import { useAuthStore } from "./useAuthStore"

const useWorkoutStore = create((set,get) => {

    const {token} = useAuthStore();

    const exerciseUrls = {
        back: "uploads/back.svg",
        biceps: "uploads/back.svg",
        chest: "uploads/chest.svg",
        hit: "uploads/hit.svg",
        legs: "uploads/legs.svg",
        shoulders: "uploads/shoulders.svg"
    }

    return {
        createsWorkout: null,
        exercises: [],
        isLoading: false,
        createExercise: async ({name, times, iconUrl}) => {
            set({isLoading: true})
            try {
                const res = await createExercise({name, times,iconUrl, token})
                set(state => state.exercises.push(res.data))
            } catch(error) {
                throw new Error(error)
            } finally {
                set({isLoading: false})
            }
        },
        deleteExercise: async ({id}) => {
            set({isLoading: true})
            try {
                await deleteExercise({id, token})
            } catch(error) {
                throw new Error(error)
            } finally {
                set({isLoading: false})
            }
        },
        createWorkout: async ({name}) => {
            set({isLoading: true})
            try {
                const exercisesId = get().exercises;
                if(exercisesId.lenght < 1) throw new Error("must be 1 exercise or above")
                const res = await createExercise({name, exercisesId, token})
                set(state => state.exercises.push(res.data))
            } catch(error) {
                throw new Error(error)
            } finally {
                set({isLoading: false})
            }
        }, 
    }
})