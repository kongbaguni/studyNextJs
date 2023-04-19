import React from "react";
import { Common } from "./common";

class Blackjack extends React.Component {

    render(): React.ReactNode {
        return (
            <>
            {Common.navi("blackjack")}
            <article>
                <header><h2>blackjack</h2></header>
            </article>
            </>            
        )
    }
}

export default Blackjack