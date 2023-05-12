import Image from "next/image"
import { HoldemBoard } from "../../models/HoldemBoard"


const HoldemComunitiCards = (holdemBoard:HoldemBoard) => {
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
export default HoldemComunitiCards