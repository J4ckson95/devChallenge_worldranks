import React from "react"
import picture_Logo from "../../assets/hero-image-wr.jpg"
import Logo_Title from "../../assets/Logo.svg"
import style from "./head.module.css"
const Head : React.FC = () =>{
    return(
        <div className={style.Head}>
            <img className={style.Logo_title} src={Logo_Title}></img>
            <img src={picture_Logo}></img>
        </div>
    )
}
export default Head
