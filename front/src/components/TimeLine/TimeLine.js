import React, { Children } from "react";
import Style from "./TimeLine.module.css"
import { useRef,useEffect } from "react";
export default function TimeLine() {
    let refcls = useRef()
    let refBar = useRef()
    let refOnce = useRef(true)
    useEffect(()=>{
        if(refOnce.current){
            let items = Array.from(refcls.current.children).filter((el)=>{
                    if(el.classList[0].split("_").includes("Item")){
                        return el
                    }
                
            })
            //.querySelectorAll(".Cls > .Item")
            //console.log(items)
            items.forEach(el => observerTest.observe(el))
            /*
            refcls.current.onScroll = ()=>{
                let clientH = window.innerHeight
                let totalHeight = document.documentElement.scrollHeight
                let percent = Math.ceil((window.scrollY / Math.abs(totalHeight-clientH))*100).toFixed(0)
                let styleW = refBar.current 
                //document.getElementsByClassName("Bar")[0]
                console.log(percent)
                styleW.style.width = `${percent}%`
            }*/
            refOnce.current = false
        }
        /*
        window.onscroll = ()=>{
            let clientH = window.innerHeight
            let totalHeight = document.documentElement.scrollHeight
            let percent = Math.ceil((window.scrollY / Math.abs(totalHeight-clientH))*100).toFixed(0)
            //console.log(`percent is ${percent}%`)
            let styleW = document.getElementsByClassName("Bar")[0]
            styleW.style.width = `${percent}%`
        }
        window.onload = ()=>{
            let items = document.querySelectorAll(".Cls > .Item")
            items.forEach(el => observerTest.observe(el))
            //observerTest.observe(Array.from(items))
        }
        */
    },[])
    const observerTest = new IntersectionObserver((e) => {
        e.forEach((el) => {
            if (el.isIntersecting) {
                el.target.classList.add("SelectedEl")
                //console.log(el)
            } else {
                el.target.classList.remove("SelectedEl")
            }
        });
    }, {
        threshold: 0.3
    })
    function execStyleScroll(){
        let clientH = window.innerHeight
        let totalHeight = refcls.current.scrollHeight  //document.documentElement.scrollHeight
        let percent = Math.ceil((refcls.current.scrollTop / Math.abs(totalHeight-clientH))*100).toFixed(0)
        let styleW = refBar.current 
        styleW.style.width = `${percent}%`
        //console.log(percent)
        //console.log("ok ")
    }
    return (
        <div className={Style.Cls} ref={refcls} onScroll={execStyleScroll}>
            <div className={Style.Bar} ref={refBar}>

            </div>
            <div className={`${Style.Item} ${Style.ItemPosL}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/caution-sign.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.Item} ${Style.ItemPosR}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/console.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.Item} ${Style.ItemPosL}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/quiz.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.Item} ${Style.ItemPosR}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/setting.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.Item} ${Style.ItemPosL}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/cut.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            <div className={`${Style.Item} ${Style.ItemPosR}`}>
                <div className={Style.CheckPointItem}>
                    <img src="/static/icons/home.png" />
                </div>
                <div className={Style.ContentItem}>
                    <div className={Style.HCon}>text1</div>
                    <div className={Style.CCon}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium tempore qui, dicta odit quia ipsam consequuntur
                            optio aut, repellendus temporibus sint minima corporis quasi a
                            in. Libero mollitia quis facilis!</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}