import React from "react";
import Style from "./spinEffect.module.css"
export default function SpinEffect() {
    return (
        <section>
            <div className={Style.loader} style={{"--r":1}}>
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>
                <span style={{"--i":4}}></span>
                <span style={{"--i":5}}></span>
                <span style={{"--i":6}}></span>
                <span style={{"--i":7}}></span>
                <span style={{"--i":8}}></span>
                <span style={{"--i":9}}></span>
                <span style={{"--i":10}}></span>
            </div>
            <div className={Style.loader} style={{"--r":2}}>
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>
                <span style={{"--i":4}}></span>
                <span style={{"--i":5}}></span>
                <span style={{"--i":6}}></span>
                <span style={{"--i":7}}></span>
                <span style={{"--i":8}}></span>
                <span style={{"--i":9}}></span>
                <span style={{"--i":10}}></span>
            </div>
            <div className={Style.loader} style={{"--r":3}}>
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>
                <span style={{"--i":4}}></span>
                <span style={{"--i":5}}></span>
                <span style={{"--i":6}}></span>
                <span style={{"--i":7}}></span>
                <span style={{"--i":8}}></span>
                <span style={{"--i":9}}></span>
                <span style={{"--i":10}}></span>
            </div>
        </section>
    )
}