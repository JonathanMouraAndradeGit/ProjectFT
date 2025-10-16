import React from "react";
import Style from "./Home.module.css"
import Slider2 from "../Slider2Component/Slider2";
import StepLine from "../StepLine/stepLine.js"
import TimeLine from "../TimeLine/TimeLine.js"
import TopMP from "../TopMP/TopMP.js";
import DetailSectionMP from "../DetailSectionMP/DetailSectionMP.js";
import FooterComp from "../Footer/FooterComp.js";

import CommemorationScr from "../commemorationScr/CommemorationScr.js";
import { UserContext } from "../../App.js";
import { useContext } from "react";
export default function Home(){
    const u = useContext(UserContext)
    return (
        /*<button onClick={()=>u({title:"warnningTitle",msg:"msg1",type:1})}>clickToMessage</button>
        <CommemorationScr></CommemorationScr>*/
        <div className={Style.HomeContainer}>
            <TopMP></TopMP>
            <Slider2></Slider2>
            <StepLine contents={[{icon:1,img:"/static/icons/console.png",desc:"description 1"},
            {icon:2,img:"/static/icons/quiz.png",desc:"description 2"},
          {icon:3,img:"/static/icons/caution-sign.png",desc:"description 3"},
          {icon:4,img:"/static/icons/setting.png",desc:"description 4"}
        ]}></StepLine>
            <DetailSectionMP></DetailSectionMP>
             <div className={Style.SLCon1}>
                <h3>Steps</h3>
                <TimeLine>

                </TimeLine>
            </div>
            <FooterComp></FooterComp>
        </div>
    )
}