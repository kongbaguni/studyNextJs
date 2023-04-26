import React from "react";
import { People } from "./People";
import { HandRank } from "./HandRank";

export class Player extends People {    
    public point:number = 0;    
    public bettingPoint:number = 0;
    public handRank:String = "";
    public betting(point:number):boolean {
        if(this.point > point) {
            this.point -= point;
            this.bettingPoint +=+ point;
            return true;
        }
        return false;
    }

    public addPoint(point:number):void {
        this.point += point;
    }

    public getCardsValue():string {
        let result = ""
        for(let i=0; i<this.cards.length; i++) {
            if(result != "") {
                result += ","
            }
            result += this.cards[i].value
        }
        return result
    }    
    
}