import Link from 'next/link';

export default function navigation(now:String) {
    return (
        <>        
        <h1><Link href = "/">Poker</Link></h1>                
        <nav>
                <ol> 
                    <li className={now == "home" ? 'on' : 'off'}><Link href = "/">home</Link></li>
                    <li className={now == "holdem" ? 'on' : 'off'}><Link href="/holdem">holdem</Link></li>
                    <li className={now == "blackjack" ? 'on' : 'off'}><Link href="/blackjack">blackjack</Link></li>
                    <li className={now == "SignInOut" ? 'on' : 'off'}><Link href="/signinout">SignInOut</Link></li>
                </ol>
                </nav>
        </>
                
    )
}

