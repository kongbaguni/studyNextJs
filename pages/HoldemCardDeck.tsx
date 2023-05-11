import { PlayerModel } from "../models/PlayerModel";
import Image from "next/image";
import { HoldemBoard } from "../models/HoldemBoard";

const HoldemCardDeck = (player : PlayerModel, holdemBoard:HoldemBoard) => {
    return  <>
    <p>        
    {                
      player.cards.map(card=> (                              
            <Image src={card.image} alt='' width={50} height={100}/>
      ))              
    } 
    &nbsp;
    {player.comunityIdxs.map(idx=> (                
        <Image src={holdemBoard.comunityCards[idx].image} alt='' width={50} height={100}/>
    ))}
    <br />
    <span>
        {player.handRank}
    </span>
    </p>
    </>
}
export default HoldemCardDeck;