import React, { useState } from "react";

import Style from "./msgC.module.css"
import MsgItem from "./msgItem";
import { useEffect } from "react";
export default function MsgC(props){
    useEffect(()=>{
        //console.log("this is an array")
        //console.log(props.arr)
        addMsg()
    },[props.arr])
    const [arr,setArr] = useState([])
    function addMsg(){
        let obj = {...props.arr}
        if(obj.type){
            let arr1 = [...arr]
            arr1.push(obj)
            setArr([...arr1])
        }
        //console.log(obj)
        //let arr1 = [...arr]
        //arr1.push(obj)
        //let arr1 = [...arr];
        //arr1.push(1)
        //setArr([...arr1])
    }
    return (
        /**<button onClick={addMsg}>click</button> */
        <div className={Style.MsgCon}>
            {arr.map((arr,i)=>{
                return <MsgItem sec={5} key={i} title={`title${arr.title}`} type={arr.type}></MsgItem>
            })
            }
        </div>
    )
}