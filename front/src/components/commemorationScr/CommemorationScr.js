import React from "react";

import Style from "./CommemorationScr.module.css"
import { useEffect,useRef,useState } from "react";
import SpinEffect from "../SpinEffect/spinEffect"
export default function CommemorationScr(){
    let rf1 = useRef()
    let rf2 = useRef()
    const [ust,setUst] = useState(false)
    let uf = useRef(true)
    useEffect(()=>{
        if(uf.current){
            setTimeout(()=>{
                addCls()
            },1500)
            uf.current = false
        }
    },[])
    function addCls(){
        rf1.current.classList.toggle("Selected")
        rf2.current.classList.toggle("Selected")
        /*
        if(!ust){
            rf2.current.style.setProperty("--pos",`-150%`)
            setUst(!ust)
        }else{
            rf2.current.style.setProperty("--pos",`0%`)
            setUst(!ust)
        }*/
        //rf2.current.Style.setProperty("--pos",0)
        console.log("bolder")
    }

    /**<img src="/logo/star.png" ref={rf2}/> */
    return (
        <div className={Style.MainComC}>
            <SpinEffect></SpinEffect>
            <div className={Style.ClsComC} onClick={addCls}>
                <div className={Style.boxCon}>
                    <div className={Style.imgCon} ref={rf2}>
                        <img src="/static/icons/star.png" ref={rf2}/>
                    </div>

                    <div className={Style.Screen} ref={rf1}>
                        <div className={Style.WallL}>
                            <div className={Style.topOpenBox}><span></span></div></div>
                        <div className={Style.WallR}>
                            <div className={Style.topOpenBox}><span></span></div></div>
                    </div>
                    <div className={Style.Screen}>
                        <div className={`${Style.WallL} ${Style.ConTBox}`}><span></span></div>
                        <div className={`${Style.WallR} ${Style.ConTBox}`}><span></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}