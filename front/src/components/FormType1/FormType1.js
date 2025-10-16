import React from "react";

import Style from "./FormType1.module.css"
import { useRef, useEffect, useState } from "react";
import { setLocal,setToken } from "../../Services/manageLocal";
import { useContext } from "react";
import { UserContext } from "../../App";
export default function FormType1() {

    const msgCF = useContext(UserContext)

    let ref1 = useRef(true)
    let ref = useRef()
    let ref2 = useRef()
    let refSld = useRef()

    const frmSig = useRef()
    const frmLog = useRef()
    useEffect(() => {
        if (ref1.current) {
            let result = ref2.current.getBoundingClientRect()
            let w = result.width / 4
            ref2.current.style.setProperty("--w", `${w}px`)
            console.log(w)
            ref1.current = false
        }
    }, [])
    function changeBar(dir) {
        let result = ref2.current.getBoundingClientRect()
        let w = result.width / 4
        if (dir == "u") {
            ref2.current.classList.add("selected")
            refSld.current.style.transform = `translateY(-100%)`
            ref2.current.style.setProperty("--w", `calc(100% - ${w}px)`)
        } else {
            ref2.current.classList.remove("selected")
            refSld.current.style.transform = `translateY(0%)`
            ref2.current.style.setProperty("--w", `${w}px`)
        }
    }
    async function SubmitSig(e){
        e.preventDefault()
        let frmData = Object.fromEntries(new FormData(frmSig.current))
        frmData["role"]=["USER"]
        console.log(frmData)
        let response = await fetch("http://localhost:4000/usr/userinsert",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(frmData)
        }).then((e)=>e.json()) 
        msgCF({title:"Usuário Criado",msg:"msg1",type:1})
        console.log(response)
    }
    async function SubmitLog(e){
        e.preventDefault()
        let frmData = Object.fromEntries(new FormData(frmLog.current))
        console.log("oksubmitting")
        let name = frmData.name
        console.log(name)
        let response = await fetch("http://localhost:4000/usr/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(frmData)
        }).then((e)=>e.json())
        if(response.token){
            setLocal(name)
            setToken(response.token)
            window.location.reload()
            msgCF({title:"authenticado",msg:"msg1",type:1})
        }else{
            console.log("invalid credentials")
            msgCF({title:"invalid credentials",msg:"msg1",type:2})
        }
    }
    return (
        <div className={Style.FT1frmf}>
            <div className={Style.SideM}>
                <p>SignUp</p>
                <div className={Style.SideLvl} ref={ref2}>
                    <p>Login</p>
                    <div className={Style.FieldBtns} ref={ref}>
                        <span onClick={() => changeBar("u")}>login</span>
                        <span onClick={() => changeBar("d")}>sign</span>
                    </div>
                </div>
            </div>
            <div className={Style.FormC}>
                <div className={Style.FrmSlideC} ref={refSld}>
                    <div className={Style.FrmCSl}>
                        <form ref={frmSig}>
                            <label htmlFor="name1">Nome</label>
                            <input id="name1" placeholder="name" name="name"></input>
                            <label htmlFor="email2">EMAIL</label>
                            <input id="email2" placeholder="email" name="email"></input>
                            <label htmlFor="pass">Senha</label>
                            <input id="pass" placeholder="password" name="password"></input>
                            <button className={Style.Frmbtn} onClick={(e)=>SubmitSig(e)}>submit</button>
                        </form>
                    </div>
                    <div className={Style.FrmCSl}>
                        <form ref={frmLog}>
                            <label htmlFor="email1">Nome</label>
                            <input id="email1" placeholder="email" name="name"></input>
                            <label>Senha</label>
                            <input placeholder="password" name="password"></input>
                            <button className={Style.Frmbtn} onClick={(e)=>SubmitLog(e)}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}