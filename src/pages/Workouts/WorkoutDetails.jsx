import { useEffect, useState } from "react";
import { getWorkout } from "../../utils/resOptions";
import { useParams } from "react-router-dom"
import { useAuthStore } from "../../zustand/useAuthStore";



const WorkoutDetails = () => {
    const {id} = useParams()
    const {token} = useAuthStore();
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await getWorkout({id, token})
            console.log(res)
            setData(res)
        }
        getData()
    }, [])

    return (
        <>
        </>
    )
}

export default WorkoutDetails;