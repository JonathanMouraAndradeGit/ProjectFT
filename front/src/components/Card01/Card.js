import React from "react";
import Style from "./Card.module.css"
import { useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom"
export default function Card(props){
    const ref = useRef()
    const nav = useNavigate()
    useEffect(()=>{
        ref.current.style.backgroundColor = props.obj.color
        ref.current.children[0].style.setProperty("--col",props.obj.color)
    },[])
    function navTo(){
        nav(props.obj.link)
    }
    return (
        <div className={Style.CardContainer}>
            <div className={Style.CardTop} ref={ref}>
                <span className={Style.iconSet}>
                    <span className={Style.circ}>
                        <img src={props.obj.icon}></img>
                    </span>
                </span>
                <p className={Style.CardTitle}>{props.obj.title}</p>
                <img src={props.obj.icon}></img>
            </div>
            <div className={Style.CardContent}>
                <p>{props.obj.desc}</p>
                <button onClick={navTo}>play</button>
            </div>
        </div>
    )
}