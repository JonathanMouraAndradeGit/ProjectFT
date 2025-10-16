import React from "react";

import Style from "./NavTest.module.css"
import { Link } from "react-router-dom";
export default function NavTest() {
    return (
        <div className={Style.NavC}>
            <div className={Style.Item}>
                <div className={Style.imgCon}>
                    <img src="/static/icons/home.png"/>
                </div>
                <div className={Style.desc}>
                    <p><Link to="/">Home</Link></p>
                </div>
            </div>
            <div className={Style.Item}>
                <div className={Style.imgCon}>
                    <img src="/static/icons/console.png"/>
                </div>
                <div className={Style.desc}>
                    <p><Link to="/game">Game</Link></p>
                </div>
            </div>
            <div className={Style.Item}>
                <div className={Style.imgCon}>
                    <img src="/static/icons/setting.png"/>
                </div>
                <div className={Style.desc}>
                    <p><Link to="/account">account</Link></p>
                </div>
            </div>
            { localStorage.getItem("userName")!=null ?(
             <div className={Style.Item}>
                <div className={Style.imgCon}>
                    <img src="/static/icons/setting.png"/>
                </div>
                <div className={Style.desc}>
                    <p><Link to="/leader">leaderboard</Link></p>
                </div>
            </div>):""
            }
        </div>
    )
}