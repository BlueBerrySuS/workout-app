import { useState } from "react"
import closetEyeImg from '../../assets/eye-closet.svg'
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
        ><img src={isVisible? openEyeImg : closetEyeImg} alt="" /></button>
    )
}

export default HideButton;