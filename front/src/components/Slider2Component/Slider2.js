import React from "react";

import Style from "./Slider2.module.css"
import { useState, useEffect, useRef } from "react";
export default function Slider2() {
    const SliderCon = useRef()
    const SliderC = useRef()
    const BallsC = useRef()
    const loadOnce = useRef(true)
    const refCon = useRef()
    const frmobj = [
        { id: 0, img: "/static/imgs/comingSoon.png", title: "title01", desc: `1Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
        active:false},
        { id: 1, img: "/static/imgs/comingSoon.png", title: "title02", desc: `2Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
        active:false },
        { id: 2, img: "/static/imgs/brain1.jpg", title: "title03", desc: `3Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
        active:true },
        { id: 3, img: "/static/imgs/comingSoon.png", title: "title04", desc: `4Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
        active:false },
        { id: 4, img: "/static/imgs/comingSoon.png", title: "title05", desc: `5Sed ut perspiciatis unde 
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
        active:false }
    ]
    useEffect(() => {
        if (loadOnce.current) {
            loadItems()
            loadOnce.current = false
        }
    }, [])
    function moveSides(side) {
        //console.log(SliderC.current)
        let gbcrMain = SliderC.current.getBoundingClientRect().width
        let getPercent = gbcrMain * (3 / 100)
        let gbcr = SliderC.current.children[0].getBoundingClientRect().width + getPercent
        //console.log(gbcr)
        if (side == "l") {
            SliderC.current.style.setProperty("--w", `${(gbcr * -1)}px`)
            SliderC.current.classList.add("desloc")
            setTimeout(() => {
                //console.log("l")
                SliderC.current.appendChild(SliderC.current.children[0])
                SliderC.current.classList.remove("desloc")
                applyBalls()


                let centernum = ((SliderC.current.children.length - 1) / 2)
                let center = parseInt(SliderC.current.children[centernum].querySelectorAll("span")[0].textContent)
                loadContent(center)
            }, 510)
        } else {

            SliderC.current.style.setProperty("--w", `${(gbcr * 1)}px`)
            SliderC.current.classList.add("desloc")
            setTimeout(() => {
                //console.log("r")
                SliderC.current.insertBefore(SliderC.current.children[(SliderC.current.children.length - 1)], SliderC.current.children[0])
                SliderC.current.classList.remove("desloc")
                applyBalls()


                let centernum = ((SliderC.current.children.length - 1) / 2)
                let center = parseInt(SliderC.current.children[centernum].querySelectorAll("span")[0].textContent)
                loadContent(center)
            }, 510)
        }
    }
    function loadItems() {
        frmobj.forEach((el) => {
            //console.log(el)
            let doc = document.createElement("div")
            doc.classList.add("ItemSl")
            let ident = document.createElement("span")
            ident.textContent = el.id
            let tit = document.createElement("p")
            tit.textContent = el.title
            let bk = document.createElement("img")
            bk.setAttribute("src",el.img)
            if(!el.active){
                bk.classList.add("deact")
            }
            doc.appendChild(bk)
            doc.appendChild(ident)
            doc.appendChild(tit)
            SliderC.current.appendChild(doc)
        })
        addBalls()
        applyBalls()
        let centernum = ((SliderC.current.children.length - 1) / 2)
        let center = parseInt(SliderC.current.children[centernum].querySelectorAll("span")[0].textContent)
        loadContent(center)
    }
    function addBalls() {
        let con = SliderC.current.children
        Array.from(con).forEach((el) => {
            let val = parseInt(el.querySelectorAll("span")[0].textContent)
            let doc = document.createElement("div")
            doc.classList.add("Ball")
            doc.textContent = val
            doc.addEventListener("click",(e)=>{
                let centernum = ((SliderC.current.children.length - 1) / 2)
                //loadContent(pos)
                let center = parseInt(SliderC.current.children[centernum].querySelectorAll("span")[0].textContent)
                //loadContent(center)
                let getdiff = Math.abs(center-parseInt(val))
                //console.log(val)
                //console.log(`the difference is ${getdiff}`)
                if(center > parseInt(val)){
                    moveto(getdiff,"r")
                }else{
                    moveto(getdiff,"l")
                }
            })
            BallsC.current.appendChild(doc)
        })
    }
    function moveto(qtd,dir){
        for(let i=0;i<qtd;i++){
            setTimeout(()=>{
                moveSides(dir)
            },(525 * i))
        }
    }
    function applyBalls() {
        let lenMain = (SliderC.current.children.length - 1) / 2
        //console.log(parseInt(SliderC.children[lenMain].querySelectorAll("span")[0].textContent))
        let res = parseInt(SliderC.current.children[lenMain].querySelectorAll("span")[0].textContent)
        //console.log("the center is")
        let len = res//(SliderC.children.length-1) / 2
        //console.log("len is " + len)
        let limit = 3
        Array.from(BallsC.current.children).forEach((el, i) => {
            let txtc = parseInt(el.textContent)
            let diff = Math.abs(txtc - len)
            //console.log(`current is ${txtc} center is ${len} the diff is ${diff}`)
            if (txtc > (len - limit) && txtc < (len + limit)) {
                let tdiff = (limit - Math.abs(len - txtc))
                let amount = ((tdiff * 100) / limit)
                el.style.position = "relative"
                el.style.height = `${amount}%`
                el.style.opacity = 1
            } else {
                el.style.position = "absolute"
                el.style.height = `0%`
                el.style.opacity = 0
            }
            //}
        })
    }
    /*
    function loadVals() {
        SliderCon = document.getElementsByClassName("SliderCon")[0]
        SliderC = document.getElementsByClassName("SliderC")[0]
        BallsC = document.getElementsByClassName("BallsC")[0]
    }*/
    function loadContent(pos){
        refCon.current.children[0].textContent = frmobj[pos].desc
        refCon.current.children[1].setAttribute("src",frmobj[pos].img)
        //refCon.current.children[1].textContent = frmobj[pos].desc
    }
    return (
        <div className={Style.mainC}>
            <h3>Games</h3>
            <div className={Style.SliderCon} ref={SliderCon}>
                <button className={`${Style.btn} ${Style.l}`} onClick={() => moveSides('r')}>&larr;</button>
                <button className={`${Style.btn} ${Style.r}`} onClick={() => moveSides('l')}>&rarr;</button>
                <div className={Style.SliderC} ref={SliderC}>

                </div>
                <div className={Style.BallsC} ref={BallsC}>

                </div>
            </div>
            <div className={Style.Content} ref={refCon}>
                <p>
                </p>
                <img>
                </img>
            </div>
        </div>

    )
}