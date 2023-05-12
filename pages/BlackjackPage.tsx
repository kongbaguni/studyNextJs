import React from "react";
import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";
import { NextPage } from "next";

const BlackjackPage : NextPage = () => {
    return (
        <>
        {Navigation("BlackjackPage")}
        <article>
            <header><h2>blackjack</h2></header>
            <p className='tooltip'>안녕하세요. 으하하하 하하항</p>
        </article>
        {SiteFooter()}
        </>            
    )
}

export default BlackjackPage