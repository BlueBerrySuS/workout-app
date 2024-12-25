import { useState } from "react";
import { createExercise } from "../../utils/resOptions";
import { useAuthStore } from "../../zustand/useAuthStore";
import { getIcon } from "../../assets/getIcon";


const CreateExercisePage = () => {

    const {token} = useAuthStore();
    const icons = [
        "chest",
        "shoulders",
        "biceps",
        "legs",
        "hit"
    ]

    const [formData, setFormData] = useState({
        name: "",
        times: 1,
        iconUrl: "",
    })

    const handleFormChange = (inputName, value) => {
        const newFormData = {...formData, [inputName]: value}
        setFormData(newFormData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createExercise({...formData, token})
            setFormData({
                name: "",
                times: 1,
                iconUrl: "",
            })
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 px-[20%]">
                    <div>
                        <label htmlFor="name"><h2>Название</h2></label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={(e) => handleFormChange("name", e.target.value)} 
                            value={formData.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="times"><h2>Количество повторений</h2></label>
                        <input 
                            type="number" 
                            name="times" 
                            id="times" 
                            onChange={(e) => handleFormChange("times", e.target.value)} 
                            value={formData.times}
                        />
                    </div>
                    <div className="flex justify-between w-[200px]">
                        {icons.map((icon, index) => (
                            <div key={index + "dex"} className="">
                                <label htmlFor={icon}>
                                    {getIcon({name: icon, active: formData.iconUrl === icon? true : false})}
                                </label>
                                <input 
                                    className="hidden"
                                    type="radio" 
                                    name="icon" 
                                    id={icon} 
                                    value={icon}
                                    onChange={(e) => handleFormChange("iconUrl", e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <button type="submit">Создать</button>
                </form>
            </div>
        </>
    )
}

export default CreateExercisePage;