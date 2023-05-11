import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import fotter from "./footer";
import { HoldemBoard } from "../models/HoldemBoard";
import { DealerModel } from '../models/DealerModel';
import { PlayerModel } from '../models/PlayerModel';
import Image from 'next/image';
import { NextPage } from "next";
import HoldemCardDeck from "./HoldemCardDeck";


const HoldemPage : NextPage = () => {
    const [holdemBoard, setHoldemBoard] = useState(new HoldemBoard(["서태지","지상렬","고길동","이박사"]));
    useEffect(()=> {
        holdemBoard.shuffleCard();
        holdemBoard.checkAllHands();
    }); 
    
    const shuffleCard = ()=> {
        // this.setState({});
        console.log("shuffleCard");
        holdemBoard.shuffleCard();
                    
        holdemBoard.checkAllHands();
        console.log("cm : " + holdemBoard.comunityCardStringValue);
    }

    const comunitiCards = () => {
        return (
            <p>
                {
                    holdemBoard.comunityCards.map (card=> (
                        <Image src={card.image} alt='' width={100} height={200}/>
                    ))
                }
            </p>

        )
    }
    
    
    return <>
        {Navigation("holdem")}
        <article>
            <header><h2>Holdem</h2></header>
       
            {comunitiCards()}
            <ol>
                {
                        holdemBoard.players.map(player => (                            
                            <li> {player.name}
                                    {
                                       HoldemCardDeck(player,holdemBoard)
                                    }                                      
                            </li>                                
                        ))
                }                    
            </ol>
            <p>
                <button onClick={shuffleCard}>shuffleCard</button>
            </p>
        </article>
        {fotter()}
        </>
}

export default HoldemPage;