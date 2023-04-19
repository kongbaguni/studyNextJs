import React from "react";
import { Common } from "./common";

class Blackjack extends React.Component {

    render(): React.ReactNode {
        return (
            <>
            {Common.navi("blackjack")}
            <article>
                <header><h2>blackjack</h2></header>
                <p className='tooltip'>안녕하세요. 으하하하 하하항</p>
            </article>
            {Common.fotter()}
            </>            
        )
    }
}

export default Blackjack