import React from "react";
import { useState, useEffect, useRef,useContext } from "react";
import Style from "./memmoryGame.module.css"

import { UserContext } from "../../../App";
export default function Memory() {
    const u = useContext(UserContext)
    const arrColors = ["red", "green", "blue", "purple", "black", "yellow", "brown", "gray"]
    const con = useRef()
    const conM = useRef()
    const select = useRef()
    const ld = useRef(true)
    //let con = document.getElementsByClassName("colorCon")[0]
    //let select = document.getElementsByClassName("dispCol")[0]
    //const [ColorsMem,setColorsMem] = useState([])
    let arrTes = []
    useEffect(()=>{
        if(ld.current){
            addBalls()
            reverCont();
            ld.current = false

        }
    },[])
    /*
    window.onload = () => {
        console.log("ok")
        addBalls()
        reverCont();
    }*/
    function addBalls() {
        let container = con.current.children[0]
        arrColors.forEach((el) => {
            let doc = document.createElement("div");
            doc.classList.add("item");
            doc.textContent = el
            doc.style.backgroundColor = el
            doc.addEventListener("click", (e) => {
                console.log(el)
                addMemBall(el)
                checkSequence()
                //startSequence()
            })
            container.appendChild(doc)
        })
    }
    function addMemBall(color) {
        let tcon = con.current.children[1]
        let doc = document.createElement("div")
        doc.style.backgroundColor = color
        doc.textContent = color
        tcon.appendChild(doc)
    }
    function startSequence() {
        let randomColor = Math.ceil(Math.random() * 7)
        console.log(randomColor + " - " + arrColors[randomColor])
        //ColorsMem.push(arrColors[randomColor])
        //arrTes = [...ColorsMem]
        arrTes.push(arrColors[randomColor])
        //setColorsMem(arrTes)
        for (let i = 0; i < arrTes.length; i++) {
            setTimeout(() => {
                select.current.style.backgroundColor = arrTes[i]
                console.log("currentcolor is " + arrTes[i])
            }, 1000 * i)
        }
        setTimeout(() => {
            select.current.style.backgroundColor = "white"
        }, 1000 * arrTes.length)
    }
    async function checkPoints(){
        let totalpoints = arrTes.length*10
        let obj
        if(arrTes.length > 1){
            obj = {"points":totalpoints,"correct":true}
        }else{
            obj = {"points":0,"correct":false}
        }
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
    function checkSequence() {
        let tcon = con.current.children[1].children

        Array.from(tcon).forEach((el, i) => {
            console.log(el.textContent + " == " + arrTes[i])
            if (el.textContent != arrTes[i]) {
                //console.log("invalid color sequence")
                //reset()
                setTimeout(() => {
                    checkPoints()
                    //alert("invalid color sequence")
                    u({title:"invalid color sequence",msg:"msg1",type:2})
                    console.log("invalid color sequence")
                    reset()
                }, 500)
            } else {
                if (i + 1 == arrTes.length) {
                    setTimeout(() => {
                        //alert("sequencia correta")
                        u({title:"sequencia correta",msg:"msg1",type:1})
                        clearAll()
                        startSequence()
                    }, 500)
                }
            }
        })
    }
    function clearAll() {
        let tcon = con.current.children[1]
        while (tcon.firstChild) {
            tcon.removeChild(tcon.firstChild)
        }
    }
    function reset() {
        clearAll()
        //ColorsMem = []
        //setColorsMem([])
        arrTes = []
        setTimeout(() => {
            //alert("NOW STARTING")
            reverCont();
        }, 1000)
    }
    function reverCont() {
        let mainC = conM.current//document.getElementsByClassName("ConM")[0]
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                if (i > 0) {
                    mainC.removeChild(mainC.children[(mainC.children.length - 1)])
                }
                let p = document.createElement("p")
                p.textContent = (3 - i)
                p.classList.add("counting")
                mainC.appendChild(p)
            }, 1050 * i)
        }
        setTimeout(() => {
            mainC.removeChild(mainC.children[(mainC.children.length - 1)])
            startSequence()
        }, 1050 * 3)
    }
    return (
        <div className={Style.ConM} ref={conM}>
            <div className={Style.dispCol} ref={select}>

            </div>
                <div className={Style.colorCon} ref={con}>
                    <div></div>
                    <div></div>
                </div>
        </div>
    )
}