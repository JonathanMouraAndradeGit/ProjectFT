import React from "react";
import Style from "./msgItem.module.css"
import { useRef,useEffect,useState } from "react";
export default function MsgItem(props){
    const rf = useRef()
    const rf1 = useRef(true)
    const [shouldD,setShouldD] = useState(true)
    function openCls(){
        rf.current.classList.toggle("activeMsg")
    }
    const arr = [{msg:"ok message with details",color:"green",img:"/static/icons/check-mark_15761039.png"},
        {msg:"warning message with details",color:"yellow",img:"/static/icons/caution-sign.png"},
        {msg:"error message with details",color:"red",img:"/static/icons/biohazard-sign.png"}]
    useEffect(()=>{
        if(rf1){
            rf.current.style.setProperty("--sec",`${props.sec}s`);
            rf.current.children[0].style.setProperty("--sec",`${props.sec}s`);
            rf.current.children[0].style.setProperty("--color",`${arr[props.type].color}`);
            setTimeout(()=>{
                setShouldD(false)
            },(props.sec*1000))
            rf1.current = false
        }
    },[])
    function delFun(){
        setShouldD(false)
    }
    return (
        <>
        {shouldD == true ?( 
        <div className={Style.MsgItemCon} ref={rf}>
            <div className={Style.HeaderMsg}>
                <img src={arr[props.type].img}/><p>{props.title}</p>
                <div className={Style.SideCon}>
                    <button onClick={delFun}><img src="/static/icons/x-button.png" /></button>
                    <button onClick={openCls}>&gt;</button>
                </div>
            </div>
            <div className={Style.Content}>
                {arr[props.type].msg}
            </div>
        </div>):""
        }
        </>
    )
}