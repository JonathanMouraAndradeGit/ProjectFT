import React from "react";
import Style from "./Games.module.css"
import Card from "../Card01/Card";
export default function Games(){
    const arr = [
        {title:"brainMaster",icon:"/static/icons/memory-lost.png",color:"red",
        desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore`,link:"/memory"},
        {title:"hammer",icon:"/static/icons/caution-sign.png",color:"red",
        desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore`,link:"/syllab"},
        {title:"big01",icon:"/static/icons/quiz.png",color:"yellow",
        desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore`,link:"/quests"},
    ]
    return (
        <div className={Style.GamesContainer}>
            <h3>Games</h3>
            <div className={Style.GamesCon}>
                {
                    arr.map((el,i)=>{
                       return <Card key={i} obj={{title:el.title,icon:el.icon,color:el.color,
                        desc:el.desc,link:el.link}}></Card>
                    })
                }
            </div>
        </div>
    )
}