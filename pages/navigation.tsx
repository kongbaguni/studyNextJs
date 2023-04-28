import Link from 'next/link';
import { ProfileManager } from '../instance/ProfileManager';

export default function navigation(now:String) {
    const isSignIn = ProfileManager.getInstance().profile != null; 
    let signBtn = (
        <li className={now == "SignInOut" ? 'on' : 'off'}><Link href="/ProfilePage">Profile</Link></li>        
    )
    if(!isSignIn) {
        <Link href="/api/auth/signin">SignIn</Link>
    }
    return (
        <>        
        <h1><Link href = "/">Poker</Link></h1>                
        <nav>
                <ol> 
                    <li className={now == "home" ? 'on' : 'off'}><Link href = "/">home</Link></li>
                    <li className={now == "holdem" ? 'on' : 'off'}><Link href="/holdem">holdem</Link></li>
                    <li className={now == "blackjack" ? 'on' : 'off'}><Link href="/blackjack">blackjack</Link></li>
                    {signBtn}
                </ol>
                </nav>
        </>
                
    )
}

