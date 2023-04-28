import React from "react";
import navigation from "./navigation";
import fotter from "./footer";

class Blackjack extends React.Component {

    render(): React.ReactNode {
        return (
            <>
            {navigation("blackjack")}
            <article>
                <header><h2>blackjack</h2></header>
                <p className='tooltip'>안녕하세요. 으하하하 하하항</p>
            </article>
            {fotter()}
            </>            
        )
    }
}

export default Blackjack