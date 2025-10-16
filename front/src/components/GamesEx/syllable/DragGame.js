import React, { useEffect, useState, useRef,useContext } from "react";
import Style from "./DragGame.module.css"
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../../App";
export default function DragGame(props) {
    const u = useContext(UserContext)
    const nav = useNavigate()
    const ref1 = useRef()
    const ref2 = useRef()
    let refOnce = useRef(true)
    const [slbs,setSlbs]= useState([]) //["me", "ga"]
    //let slbs = []
    useEffect(() => {
        const setRes = async ()=>{
            let result = await searchArrLst()
            let arr = result.arraySyllabs.map((el)=>{
                return el.syllab
            })
            console.log(arr)
            //slbs = arr
            setSlbs(arr)
            console.log(result)
            const draggables = ref1.current.querySelectorAll(`.${Style.mdvH}`);
            draggables.forEach(el => {
                console.log(el)
                dragElement(el);
            });
        }
        if (refOnce.current) {
            setRes()
            //searchArrLst()
            /*
            const draggables = ref1.current.querySelectorAll(`.${Style.mdvH}`);
            draggables.forEach(el => {
                console.log(el)
                dragElement(el);
            });*/
            refOnce.current = false
        }
    }, []);
    useEffect(()=>{
        const draggables = ref1.current.querySelectorAll(`.${Style.mdvH}`);
            draggables.forEach(el => {
                console.log(el)
                dragElement(el);
            });
    },[slbs])
    async function searchArrLst(){
        let result = await fetch("http://localhost:4000/usr/getAllSyllabs",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((el)=>el.json())
        console.log(result)
        let rand = Math.round(Math.random()*(result.length-1))
        //console.log(rand)
        return result[rand]
    }
    function dragElement(elmnt) {
        console.log("ok here")
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            console.log("down")
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            //console.log("draging")
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            let widthprops = elmnt.getBoundingClientRect()
            //console.log("width "+widthprops.width+" height "+widthprops.height)
            elmnt.style.width = `${widthprops.width}px`
            elmnt.style.height = `${widthprops.height}px`
            elmnt.style.position = "absolute"
        }

        function closeDragElement(e) {
            let elementBelow = document.elementFromPoint(pos3, pos4);
            elementBelow.style.pointerEvents = 'none'
            const elementUnderneath = document.elementFromPoint(pos3, pos4);
            console.log("underneath is ")
            console.log(elementUnderneath)
            elementBelow.style.pointerEvents = 'auto';
            let par = elementBelow//.parentElement
            /*
            if (elementUnderneath != par && document.children[0] != elementUnderneath) {
                elementUnderneath.appendChild(par)
            }*/
            let arr = ["Slot", "slbsCon"]
            let cls1 = elementUnderneath.classList[0]
            try {
                console.log(cls1)
                if (cls1.split("_")[1] == "Slot") {
                    elementUnderneath.appendChild(par)
                } else {
                    console.log("shoul be inserted here")
                    console.log(ref1.current)
                    ref1.current.appendChild(par)
                }
            }
            catch (e) {
                ref1.current.appendChild(par)
            }finally{
                par.style.position = "relative"
                elmnt.style.top = "0px";
                elmnt.style.left = "0px";
                elmnt.style.width = "100%"
                elmnt.style.height = "100%"
            }
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    async function checkPoints(correct){
        let totalpoints = 100
        let obj
        if(correct){
            obj = {"points":totalpoints,"correct":true}
        }else{
            obj = {"points":0,"correct":false}
        }
        console.log("seindig ppoints")
        if(localStorage.getItem("token") != null){
            let result = await fetch("http://localhost:4000/usr/addPoints",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(obj)
            }).then((e)=>e.json())
            console.log(result)
        }
    }
    function check(){
        let el = ref2.current.children
        //console.log("len is "+el.left)
        let str = ""
        Array.from(el).forEach((e)=>{
            if(e.children.length > 0){
                str = str+e.children[0].textContent
            }
            console.log(e)
        })
        if(str == slbs.join("")){
            console.log(`${str} = ${slbs.join("")}`)
            //alert("silabas corretas "+`${str} = ${slbs.join("")}`)
            u({title:"silabas corretas",msg:"msg1",type:1})
            checkPoints(true)
            setTimeout(()=>{
                nav("/game")
            },500*3)
        }else{
            //alert("silabas incorretas ")
            u({title:"silabas incorretas",msg:"msg1",type:2})
            checkPoints(false)
        }
    }
    return (
        <div className={Style.mainCGB}>
            <div className={Style.HeaderBuild}>
                <p>{slbs.join("")}</p>
            </div>
            <div className={Style.SilabSlots} ref={ref2}>
                {slbs.length > 0 ? (
                    slbs.map((el, i) => {
                        //console.log(el)
                        return <div className={Style.Slot} key={i}></div>
                    })
                ) : <p>no Silabs provided</p>}
            </div>
            <div className={Style.slbsCon} ref={ref1}>
                {slbs.length > 0 ? (
                    slbs.map((el, i) => {
                        //console.log(el)
                        return <div className={Style.mdvH} key={i}>{el}</div>
                    })
                ) : ""}
            </div>
            <div className={Style.BtnBar}>
                <button onClick={check}>Submit</button>
            </div>
        </div>
    )
}