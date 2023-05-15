import Link from 'next/link';
import { ProfileManager } from '../../instance/ProfileManager';

export default function Navigation(now:String) {
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
                    <li className={now == 'HomePage' ? 'on' : 'off'}><Link href = "/">Home</Link></li>
                    <li className={now == 'HoldemPage' ? 'on' : 'off'}><Link href="/HoldemPage">Holdem</Link></li>
                    <li className={now == 'BlackjackPage' ? 'on' : 'off'}><Link href="/BlackjackPage">Blackjack</Link></li>
                    <li className={now == 'ProductListPage' ? 'on' : 'off'}><Link href="/ProductList/all">Product List</Link></li>
                    {signBtn}
                </ol>
                </nav>
        </>
                
    )
}

