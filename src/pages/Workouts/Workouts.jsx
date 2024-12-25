import { useEffect, useState } from "react";
import { getWorkouts } from "../../utils/resOptions";
import { useAuthStore } from "../../zustand/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import modelImg from "../../assets/workout-model.png"
import cross from "../../assets/cross.svg"


const WorkoutsPage = () => {
    const {token} = useAuthStore();
    const [data, setData] = useState(null)

    const nav = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getWorkouts({token})
                setData(res.data)
            } catch(error) {
                console.error(error)
            }
        }
        getData();
    }, [])
    
    const handleClick = () => {
        nav("create");
    }

    if(!data) return null
    return (
        <>
        <div className="pb-[100px]">
            <div className="flex justify-between px-[10%] h-[700px] w-full bg-gray-gradient pt-10">
                <div className="flex pt-[5%] gap-5 flex-col h-full text-white max-w-[50%]">
                    <h1 className="font-helvetica italic font-black text-6xl">TRANSFORM YOUR LIFE WITH FITLIFE STUDIO</h1>
                    <h3 className="font-roboto text-lg w-[80%]">
                        Join FitLife Studio Today and Experience Expert Training,
                        Personalized Programs, and a Supportive Community to Achieve Your Fitness Goals.
                    </h3>
                </div>
                <div className="h-full box-content">
                    <img src={modelImg} alt="" className="h-full w-auto"/>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col w-full px-[10%]">
                <h2 className="font-roboto font-semibold text-4xl my-10">Workouts</h2>
                <div className="grid grid-cols-5 gap-5 w-full">
                    {data.map((workout, index) => (
                        <Link to={"1"} key={index + "index"} className="shadow-contrast p-5 rounded-xl min-h-[90px]">
                            <div className="text-lg">{workout.name}</div>
                            <div className="text-gray-600 text-sm">{`${workout.exercises.length} exercises`}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <button onClick={handleClick} className="rounded-full shadow-contrast p-3 fixed bottom-10 right-10">
                <img src={cross} alt="" />
            </button>
        </div>
        </>
    )
}

export default WorkoutsPage;