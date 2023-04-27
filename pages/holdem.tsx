import React from "react";
import { Common } from "./common";
import { HoldemBoard } from "../models/HoldemBoard";
import { Dealer } from '../models/Dealer';
import { Player } from '../models/Player';
import Image from 'next/image';

class Holdem extends React.Component {
    private holdemBoard = new HoldemBoard(["서태지","지상렬","고길동","이박사"])
    
    cardDeck = (player:Player) => {
        return (
          <p>
            {                
              player.cards.map(card=> (                      
                    <Image src={card.image} alt='' width={50} height={100}/>
              ))              
            } 
            &nbsp;
            {player.comunityIdxs.map(idx=> (                
                <Image src={this.holdemBoard.comunityCards[idx].image} alt='' width={50} height={100}/>
            ))}
            <br />
            <span>
                {player.handRank}
            </span>
          </p>
        )
      }

    comunitiCards = () => {
        return (
            <p>
                {
                    this.holdemBoard.comunityCards.map (card=> (
                        <Image src={card.image} alt='' width={100} height={200}/>
                    ))
                }
            </p>

        )
    }
    render(): React.ReactNode {
        return <>
        {Common.navi("holdem")}
        <article>
            <header><h2>Holdem</h2></header>
       
            {this.comunitiCards()}
            <ol>
                {
                        this.holdemBoard.players.map(player => (                            
                            <li> {player.name}
                                    {
                                       this.cardDeck(player)
                                    }                                      
                            </li>                                
                        ))
                }                    
            </ol>
            <p>
                <button onClick={this.shuffleCard}>shuffleCard</button>
            </p>
        </article>
        {Common.fotter()}
        </>
    }

    shuffleCard = ()=> {
        this.setState({});
        console.log("shuffleCard");
        this.holdemBoard.shuffleCard();
                    
        this.holdemBoard.checkAllHands();
        console.log("cm : " + this.holdemBoard.comunityCardStringValue);
    }

    componentDidMount(): void {
        this.setState({});
        this.holdemBoard.shuffleCard();
        this.holdemBoard.checkAllHands();
    }
}

export default Holdem;