import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import navigation from "./navigation";



const SignInOut: NextPage = () => {
  const { data, status } = useSession();
  let isSignIn = false;
  let email = "";
  let name = "";
  let image = "";
  if( data != null && data.user!= null) {
    isSignIn = true;
    email = data.user.email
    name = data.user.name
    image = data.user.image
  }


  let profileBody = (
    <>
    <article>
      <header><h2>SignIn</h2></header>
      <p>
      <Link href="/api/auth/signin">SignIn</Link>
      </p>
    </article>
    </>
  )
  if(isSignIn) {
    profileBody = (
      <>
      <article>
        <header>
          <h2>Profile</h2>
        </header>
      <table>
        <tbody>
          <tr>
            <td rowSpan={3}> <img src ={image} alt="profile" width={100} height={100}/></td>
            <th>email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <td colSpan={2}><Link href="/api/auth/signout">SignOut</Link></td>
          </tr>
        </tbody>
      </table>
      
      </article>
      </>
    )
  }
  

  return (
    <>
      {navigation("SignInOut")}
      {profileBody}
    </>
  );
  
};

export default SignInOut;