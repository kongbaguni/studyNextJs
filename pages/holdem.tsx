import React from "react";
import { Common } from "./common";

// class Holdem extends React.Component {
//     render(): React.ReactNode {
//         return <>
//         {Common.navi("holdem")}
//         <article>
//             <header><h2>Holdem</h2></header>
//         </article>
//         {Common.fotter()}
//         </>
//     }
// }

function Holdem() {
    return (
        <>
        {Common.navi("holdem")}
        <article>
            <header><h2>Holdem</h2></header>
        </article>
        {Common.fotter()}
        </>
    )
}
export default Holdem;