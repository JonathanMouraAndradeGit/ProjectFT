import React from "react";
import Style from "./leaderboard.module.css"
import { useState,useEffect } from "react";
export default function Leaderboard(){
    const [usrl,setUsrl] = useState([])
    useEffect(()=>{
        const val = async ()=>{
            setUsrl(await searchVals())
        }
        val()
    },[])
    async function searchVals(){
        try{
            let result = await fetch("//localhost:4000/usr/getAll",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                },
            }).then((e)=>e.json())
            return result
        }catch(e){
            return []
        }
    }
    return (
        <div className={Style.LBCon}>
            <h3>Leaderboard</h3>
            <div className={Style.LBlst}>
                <table>
                    <thead>
                    <tr className={`${Style.HeaderItem} ${Style.maxSize} ${Style.flexPattern}`}>
                        <th>place</th>
                        <th>name</th>
                        <th>points</th>
                        <th>level</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            usrl.length > 0 ? (
                                usrl.map((e,i)=>{
                                    let med = ((e.points.RightAnswers / e.points.qtdAnswer)*100).toFixed(2)
                                    return <tr key={i}
                                    className={`${Style.UItem} ${Style.maxSize} ${Style.flexPattern}`}>
                                        <td>{(i+1)}</td>
                                        <td>{e.name}</td>
                                        <td>{e.points.points}</td>
                                        <td>{ med
                                        }%</td>
                                    </tr>
                                })

                            ) :""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}