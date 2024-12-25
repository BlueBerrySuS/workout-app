import { useEffect, useState } from "react"
import { createWorkout, getExercises } from "../../utils/resOptions";
import { useAuthStore } from "../../zustand/useAuthStore";
import { getIcon } from "../../assets/getIcon";


const CreateWorkoutPage = () => {

    const [formData, setFormData] = useState({
        ids: [],
        name: "",
    });
    const {token} = useAuthStore();
    const [data, setData] = useState(undefined);
    const [filtredData, setFiltredData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getExercises({token})
                setData(res)
            } catch(error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    const handleCheck = (e) => {
        const value = e.target.value
        let newIds = [];
        if (formData.ids.includes(value)) {
            newIds = formData.ids.filter(id => id !== value);
            e.target.checked = false;
        } else {
            newIds = [...formData.ids, value];
            e.target.checked = true;
        }
        setFormData({...formData, ids: newIds})
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log({...formData, token})
            const res = await createWorkout({...formData, token})
            if(res.ok) console.log("succses")
        } catch(error) {
            console.error(error)
        }
    }
    // const isCheked = (value) => {
    //     return formData.ids.includes(value)? "on" : false
    // }


console.log(formData.ids)
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Введите Название</label>
            <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
            <div>
                {data && !filtredData && data.map((exercise, index) => (
                    <label key={index + "kek"} htmlFor={exercise.id}>
                        <input 
                            type="checkbox" 
                            value={exercise.id} 
                            id={exercise.id}
                            checked={formData.ids.includes(String(exercise.id))} 
                            onChange={e => handleCheck(e)}
                        />
                        <div>{exercise.name}</div>
                        <div>{exercise.times}</div>
                        <div>{getIcon({name: exercise.iconPath, active: true})}</div>
                    </label>
                    ))
                }
                {filtredData && data.map((exercise, index) => (
                    <label key={index + "kek"} htmlFor={exercise.id}>
                        <input type="checkbox" value={exercise.id} id={exercise.id} onChange={e => handleCheck(e.target.value)}/>
                        <div>{exercise.name}</div>
                        <div>{exercise.times}</div>
                        <div>{getIcon({name: exercise.iconPath, active: true})}</div>
                    </label>
                    ))
                }
            </div>
            <button type="submit">Создать</button>
        </form>
        </>
    )
}

export default CreateWorkoutPage;