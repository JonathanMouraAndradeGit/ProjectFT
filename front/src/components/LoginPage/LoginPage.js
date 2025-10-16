import React from "react";

import Style from "./LoginPage.module.css" 
import FormType1 from "../FormType1/FormType1";
export default function LoginPage(){
    return (
        <div className={Style.FT1}>
            <div className={Style.FT1frm}>
                <FormType1></FormType1>
            </div>
        </div>
    )
}