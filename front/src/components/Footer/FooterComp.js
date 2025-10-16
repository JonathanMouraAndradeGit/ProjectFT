import React from "react";
import Style from "./FooterComp.module.css"
export default function FooterComp(){
    return(
        <div className={Style.FooterCompC}>
            <div>
                <h3>Footer-Text</h3>
                <p>email@gmail.com</p>
                <div className={Style.Socials}>
                    <img src="/static/icons/caution-sign.png"/>
                    <img src="/static/icons/caution-sign.png"/>
                    <img src="/static/icons/caution-sign.png"/>
                </div>
            </div>
            <div className={Style.ColCon}>
                <table>
                    <thead>
                        <tr>
                            <th>title-1</th>
                            <th>title-2</th>
                            <th>title-3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>section1</td><td>section2</td><td>section3</td></tr>
                        <tr><td>access</td><td>value</td><td>data</td></tr>
                        <tr><td>data</td><td>result</td><td>value</td></tr>
                        <tr><td>result</td><td>resource</td><td>result</td></tr>
                        <tr><td>value</td><td>data</td><td>value</td></tr>
                        <tr><td>section1</td><td>section2</td><td>section3</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}