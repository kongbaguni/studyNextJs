import React from "react";
import Navigation from "./Navigation";
import fotter from "./footer";
import { NextPage } from "next";

const BlackjackPage : NextPage = () => {
    return (
        <>
        {Navigation("blackjack")}
        <article>
            <header><h2>blackjack</h2></header>
            <p className='tooltip'>안녕하세요. 으하하하 하하항</p>
        </article>
        {fotter()}
        </>            
    )
}

export default BlackjackPage