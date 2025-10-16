import React from "react";
import Style from "./UsrTopCon.module.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { setLocal } from "../../Services/manageLocal";
import { delLocal } from "../../Services/manageLocal";
import { useState } from "react";
export default function UsrTopCon(){
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const nav = useNavigate()
    function LogOut(){
        nav("/")
        delLocal()
        setUserName(null);
        //setLocal(null)
    }
    return (
        <div className={Style.UTConcLS}>
            { userName!=null ? (
            <div className={Style.UTCon}>
                <div className={Style.UTCHeader}>
                    <img src="/static/icons/caution-sign.png"/>
                    {localStorage.getItem("userName")}
                </div>
                <div className={Style.ContentUTC}>
                    <button className={`${Style.bottomF} ${Style.btn}`} onClick={LogOut}>
                        log-out
                    </button>
                </div>
            </div>
            ) : ""}
        </div>
    )
}