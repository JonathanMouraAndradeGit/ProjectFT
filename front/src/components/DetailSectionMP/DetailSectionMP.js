import React from "react";
import Style from "./DetailSectionMP.module.css"
export default function DetailSectionMP(){
    return (
        <div className={Style.DSecMPCon}>
            <div className={Style.imgsDisp}>
                <img src="/static/imgs/gamebk2.jpg"/>
                <img src="/static/imgs/gamebk3.jpg"/>
            </div>
            <div className={Style.DSecMPContent}>
                <h3>title</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi</p>
                <div className={Style.DSecMPContentCardCon}>
                    <div>
                        <img src="/static/icons/console.png"/>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    </div>
                    <div>
                        <img src="/static/icons/console.png"/>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    </div>
                    <div>
                        <img src="/static/icons/console.png"/>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                            accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}