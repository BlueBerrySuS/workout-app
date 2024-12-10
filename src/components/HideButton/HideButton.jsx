import { useState } from "react"
import closedEyeImg from '../../assets/eye-closed.svg'
import openEyeImg from '../../assets/eye-open.svg'


const HideButton = ({onHandleClick}) => {

    const [isVisible, setIsvisible] = useState(false);
    return (
        <button 
            type="button"
            onClick={() => {
                setIsvisible(!isVisible); 
                onHandleClick()
            }} 
        ><img src={isVisible? openEyeImg : closedEyeImg} alt="" /></button>
    )
}

export default HideButton;