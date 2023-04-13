import back from '../images/back.svg'
import _2C from '/images/2C.svg'
import _3C from '/images/3C.svg'
import _4C from '/images/4C.svg'
import _5C from '/images/5C.svg'
import _6C from '/images/6C.svg'
import _7C from '/images/7C.svg'
import _8C from '/images/8C.svg'
import _9C from '/images/9C.svg'
import _TC from '/images/TC.svg'
import _JC from '/images/JC.svg'
import _QC from '/images/QC.svg'
import _KC from '/images/KC.svg'
import _AC from '/images/AC.svg'

import _2S from '/images/2S.svg'
import _3S from '/images/3S.svg'
import _4S from '/images/4S.svg'
import _5S from '/images/5S.svg'
import _6S from '/images/6S.svg'
import _7S from '/images/7S.svg'
import _8S from '/images/8S.svg'
import _9S from '/images/9S.svg'
import _TS from '/images/TS.svg'
import _JS from '/images/JS.svg'
import _QS from '/images/QS.svg'
import _KS from '/images/KS.svg'
import _AS from '/images/AS.svg'

import _2D from '/images/2D.svg'
import _3D from '/images/3D.svg'
import _4D from '/images/4D.svg'
import _5D from '/images/5D.svg'
import _6D from '/images/6D.svg'
import _7D from '/images/7D.svg'
import _8D from '/images/8D.svg'
import _9D from '/images/9D.svg'
import _TD from '/images/TD.svg'
import _JD from '/images/JD.svg'
import _QD from '/images/QD.svg'
import _KD from '/images/KD.svg'
import _AD from '/images/AD.svg'

import _2H from '/images/2H.svg'
import _3H from '/images/3H.svg'
import _4H from '/images/4H.svg'
import _5H from '/images/5H.svg'
import _6H from '/images/6H.svg'
import _7H from '/images/7H.svg'
import _8H from '/images/8H.svg'
import _9H from '/images/9H.svg'
import _TH from '/images/TH.svg'
import _JH from '/images/JH.svg'
import _QH from '/images/QH.svg'
import _KH from '/images/KH.svg'
import _AH from '/images/AH.svg'

export class Card {
    public value : string  // " TC : 10 클로버 "
    constructor(value: string) {
        this.value = value
    }            
    
    getImage() {
        console.log("get Image : " + this.value)
        switch (this.value) {
            case "2C": return _2C
            case "3C": return _3C
            case "4C": return _4C
            case "5C": return _5C
            case "6C": return _6C
            case "7C": return _7C
            case "8C": return _8C
            case "9C": return _9C
            case "TC": return _TC
            case "JC": return _JC
            case "QC": return _QC
            case "KC": return _KC
            case "AC": return _AC

            case "2D": return _2D
            case "3D": return _3D
            case "4D": return _4D
            case "5D": return _5D
            case "6D": return _6D
            case "7D": return _7D
            case "8D": return _8D
            case "9D": return _9D
            case "TD": return _TD
            case "JD": return _JD
            case "QD": return _QD
            case "KD": return _KD
            case "AD": return _AD
            
            case "2S": return _2S
            case "3S": return _3S
            case "4S": return _4S
            case "5S": return _5S
            case "6S": return _6S
            case "7S": return _7S
            case "8S": return _8S
            case "9S": return _9S
            case "TS": return _TS
            case "JS": return _JS
            case "QS": return _QS
            case "KS": return _KS
            case "AS": return _AS

            case "2H": return _2H
            case "3H": return _3H
            case "4H": return _4H
            case "5H": return _5H
            case "6H": return _6H
            case "7H": return _7H
            case "8H": return _8H
            case "9H": return _9H
            case "TH": return _TH
            case "JH": return _JH
            case "QH": return _QH
            case "KH": return _KH
            case "AH": return _AH
            
                        
            default:
                return back
        }
    }

    getType():string {
        return this.value.slice(1)
    }
    getTypePoint() : number {
        switch(this.getType().toUpperCase()) {
            case "S": return 4
            case "D": return 3
            case "H": return 2
            case "C": return 1
            default: return 0
        }
    }
    getPoint() : number {
        const value = this.value.charAt(0).toUpperCase()
        switch(value) {
            case "A": return 14
            case "T" : return 10
            case "J" : return 11
            case "Q" : return 12 
            case "K" : return 13
            default : Number(value)
        }
        return 0
    }
}

