import React from "react";

import Style from "./quest.module.css"
import { useState,useEffect,useRef } from "react";
export default function Quest(props){
    const arrAlternates=["a","b","c","d","e"]
    let [selectedA,setSelectedA] = useState(0)
    let [quest,setQuest] = useState()
    let [qtd,setQtd] = useState([])
    let [cur,setCur] = useState(1)
    const ref = useRef()
    useEffect(()=>{
        console.log(props.questionBK)
        setQuest(props.questionBK.question)
        setQtd(props.questionBK.answers)
    },[props.questionBK])
    //let quest = props.questionBK.question
    /*`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea`*/
    //let qtd = props.questionBK.answers
    /*[{num:"a",desc:"answer01"},
        {num:"b",desc:"answer02"},
        {num:"c",desc:"answer03"},
        {num:"d",desc:"answer04"}]*/
    function current(e){
        //let chil = e.target.children[0]
        //console.log("the current value is "+res+" values: "+chil)
        if(e.target.value){
            console.log(e.target.value+" - "+e.target.id)
            setSelectedA(e.target.id)
        }

    }
    async function subs(){
        let answerObject = {idQuestion:parseInt(props.questionBK.id),idAnwer:parseInt(selectedA)}
        let res = await props.checkF(answerObject)
        console.log(res.body.obj)
        markResults(res.body.obj)
        /*
        if(res.isCorrect){
            
        }else{

        }*/
        setTimeout(()=>{
            rmvResults()
            console.log(props.questionBK.id)
            props.forwardF(answerObject)
            setCur(cur+1)
        },(500*4))
    }
    function markResults(correctObj){
        Array.from(ref.current.children).forEach((el)=>{
            console.log(el)
            console.log(parseInt(el.getAttribute("for"))+" - "+correctObj)
            if(parseInt(el.getAttribute("for")) == correctObj.id){
                el.classList.add("CorrectAnswer")    
            }else{
                el.classList.add("WrongAnswer")
            }
        })
    }
    function rmvResults(){
        Array.from(ref.current.children).forEach((el)=>{
            el.classList.remove("CorrectAnswer") 
            el.classList.remove("WrongAnswer")
        })
    }
    return (
        <div className={Style.ConQ}>
            <div className={Style.QTxt}>
                <span>{cur}</span><p>{quest}</p>
            </div>
            <div className={Style.quest} ref={ref}>
                {
                    qtd.length > 0 ? ( Array.from(qtd).map((el,i)=>{
                        return <label htmlFor={el.id} key={i} className={Style.ItemQ} onClick={(e)=>current(e)}>
                                    <input type="radio" id={el.id} name="ans"/>
                                    <div className={Style.conCut}>
                                        <label htmlFor={`cut${i}`} className={Style.Cut}>
                                            <input id={`cut${i}`} type="checkbox"/></label>
                                    </div>
                                    <span className={Style.ItemMark}>{arrAlternates[i]}</span>
                                    <p>{el.description}</p>
                                </label>
                    }) ): ""
                }
            </div>
            <div className={Style.BtnBar}>
                <button className={Style.Qbtn} onClick={subs}>Submit</button>
            </div>
        </div>
    )
}
