import React from "react";
import Style from "./TopMP.module.css"
export default function TopMP(){
    return (
        <div className={Style.mainCTMP}>
            <img src="/static/imgs/gamebk3.jpg"/>
            <div className={Style.SideTxt}>
                <h2>title</h2>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi
                </p>
                <div className={Style.ButtonBar}>
                    <button>Games</button><button>Signup</button>
                </div>
            </div>
            <div className={Style.bottomBar}>
                <div className={Style.BBarItem}>
                    <p>01</p><div>
                        <h4>title1</h4>
                        <p>ed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem 
                            aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                </div>
                <div className={Style.BBarItem}>
                    <p>02</p><div>
                        <h4>title2</h4>
                        <p>ed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem 
                            aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                </div>
                <div className={Style.BBarItem}>
                    <p>03</p><div>
                        <h4>title3</h4>
                        <p>ed ut perspiciatis unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, totam rem 
                            aperiam, eaque ipsa quae ab illo inventore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}