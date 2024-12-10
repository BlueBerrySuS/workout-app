import { useEffect, useState } from "react";
import s from "./Toast.module.css"


const Toast = ({type, message, onClose}) => {
    const [isActive, setIsActive] = useState(true);

    const handleAnimationEnd = (e) => {
        if (e.animationName === s.fadeOut) {
            setIsActive(false)
        }
    };
    
    const toastTypes = {
        succes: "succes",
        error: "error",
        warning: "warning"
    }

    if(!isActive) return null;

    const img = toastTypes[type] || "default";

    return (
        <div className={s.toast} onAnimationEnd={handleAnimationEnd}>
            <div className={s.toast__img}>
                {/* <img src={img} alt="" /> */ img}
            </div>
            <div className={s.toast__message}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Toast;