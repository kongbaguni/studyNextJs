import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { HoldemBoard } from '../models/HoldemBoard';
import { GetServerSideProps, NextPage } from "next";
import HoldemCardDeck from "./components/HoldemCardDeck";
import { GameManager } from '../instance/GameManager';
import HoldemComunitiCards from "./components/HoldemComunitiCards";
import SiteFooter from "./components/SiteFooter";

const HoldemPage : NextPage = () => {
    
    const [holdemBoard, setHoldemBoard] = useState(GameManager.getInstance().holdemBoard);

    useEffect(()=> {
        console.log("lifeCycle : 나타났다");
        shuffleCard();                
        return () => {
            shuffleCard();
            console.log("lifeCycle : 사라졌다");            
        }
    }); 
    
    const shuffleCard = ()=> {
        holdemBoard.shuffleCard();                    
        holdemBoard.checkAllHands();        
        setHoldemBoard(holdemBoard)
    }    
    
    return <>
        {Navigation("HoldemPage")}
        <article>
            <header><h2>Holdem</h2></header>       
            {HoldemComunitiCards(holdemBoard)}
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
        </article>
        {SiteFooter()}
        </>
}

export default HoldemPage;

  