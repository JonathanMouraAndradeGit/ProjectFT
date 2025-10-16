import React from "react";
import Style from "./stepLine.module.css"
import { useEffect,useState,useRef } from "react";
export default function StepLine(props){
    let refb = useRef(true)
    let ref = useRef()
    useEffect(()=>{
        if(refb.current){
            addItems()
            refb.current = false
        }
    },[])
    function addItems(){
        props.contents.forEach((e,i)=> {
            let doc = document.createElement("div")
            doc.classList.add("SLConLstItem")
            doc.style.setProperty("--pos",(i))
            doc.textContent = i
            let circ = document.createElement("div")
            let line = document.createElement("span")
            line.classList.add("line")
            line.style.setProperty("--pos",(i))
            circ.classList.add("SLCenterContent")
            //circ.textContent = e.icon
            /*----------------*/
            let img = document.createElement("img")
            img.setAttribute("src",e.img)
            circ.appendChild(img)
            /*----------------*/
            let txt = document.createElement("p")
            txt.classList.add("SLtxt")
            txt.textContent = e.desc
            doc.appendChild(line)
            doc.appendChild(circ)
            doc.appendChild(txt)
            doc.addEventListener("click",(e)=>{
                console.log(parseInt(i))
                markList(parseInt(i))
            })
            //let p = document.createElement("p")
            ref.current.appendChild(doc)
        });
    }
    function markList(current){
        Array.from(ref.current.children).forEach((el,i)=>{
            console.log(`current is ${current} for c is ${i}`)
            if(parseInt(i) < current){
                el.classList.add("SLselect")
            }else{
                if(parseInt(i) == current){
                    //console.log(Array.from(el.classList)
                    if(!el.classList.contains("SLselect")){
                        el.classList.add("SLselect")
                    }else{
                        el.classList.remove("SLselect")
                    }
                }else{
                    el.classList.remove("SLselect")
                }
            }
        })
    }
    return (
        <div className={Style.SLCon1}>
            <h3>Funcoes</h3>
            <div className={Style.SLCon} ref={ref}>
                
            </div>
        </div>
    )
}