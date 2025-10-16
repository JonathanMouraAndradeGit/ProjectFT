import React from "react";

import Style from "./questC.module.css"
import Quest from "../Quest/quest";
import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom"
import CommemorationScr from "../commemorationScr/CommemorationScr";
export default function QuestC(){
    const nav = useNavigate()
    const ref = useRef(true)
    let [currentQ,setCurrentQ] = useState(0)
    let [arrQuest,setArrQuest] = useState([])
    let [showPage,setShowPage] = useState(true)
    useEffect(()=>{
        let getAnswers = async ()=>{
           let quest = await fetchQuestions()
           setArrQuest(quest)
        }
        if(ref.current){
            getAnswers()
            ref.current = false
            setCurrentQ(0)
        }
    },[])
    useEffect(()=>{
        if(!showPage){
            setTimeout(()=>{
                goToGames()
            },5000)
        }
    },[showPage])
    async function forward(objA){
        let checkC = await checkIfCorrect(objA)
        console.log(checkC)
        setCurrentQSelected()
    }
    function setCurrentQSelected(){
        if((currentQ+1) <= (arrQuest.length-1)){
            setCurrentQ(currentQ+1)
        }else{
            setShowPage(false)
        }
    }
    function goToGames(){
        nav("/game")
    }
    async function checkIfCorrect(objA){
        console.log("checking "+objA)
        console.log(objA)
        let result = await fetch("http://localhost:4000/usr/checkQuestion",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(objA)
        }).then((e)=>e.json())
        //console.log(result)
        return result
    }
    async function fetchQuestions(){
        let obj = await fetch("http://localhost:4000/usr/QuestionCons",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((e)=>e.json())

        //console.log(obj)
        return obj
    }
    return (
        <div className={Style.QuesC}>
            { showPage ? (
                arrQuest && arrQuest.length > 0 ? (
                    <Quest questionBK={arrQuest[currentQ]} forwardF={forward} checkF={checkIfCorrect}></Quest>
                ) :"") : 
                <CommemorationScr></CommemorationScr>
            }
        </div>
        /**<p>questions Finished <button onClick={goToGames}>go Back to Menu</button></p> */
    )
}