import Head from 'next/head'
import styles from '../styles/Home.module.css';
import '../instance/GameManager';
import { GameManager } from '../instance/GameManager';
import Image from 'next/image';
import '../extensions/Array';
import React, { ReactNode, useState } from 'react';
import { Card } from '../models/Card';

GameManager.getInstance().addCardShuffle();



export default function Home() {  
  const [cards, setCards] = useState([]);
  const [handRank, setHandRank] = useState("");
  
  function list() {
    if(cards.length == 0) {
      popFiveCard()
    }
    return (
      <p>
        <Image src={cards[0]} alt='카드' width={100} height={200} />
        <Image src={cards[1]} alt='카드' width={100} height={200} />
        <Image src={cards[2]} alt='카드' width={100} height={200} />
        <Image src={cards[3]} alt='카드' width={100} height={200} />
        <Image src={cards[4]} alt='카드' width={100} height={200} />
      </p>  
    )
  }
  
  function popFiveCard() {
    console.log("popFiveCard");
    const newCards = [
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard()
    ]
  
    const images = newCards.map((value)=>{
      return value.getImage()
    })
    console.log("images : " + images);
    setCards(images);
    const rank = GameManager.getInstance().getHandRank(newCards);
    console.log("hand Rank : " + rank);
    setHandRank(rank);

  }

  function btnOnClick() {
    console.log("btnOnClick")
    popFiveCard();
  }
  
  return (
    <div>
    <h1>Poker</h1>
    <article>
      <header><h2>Card</h2></header>
        {list()}
        <p>{handRank}</p>
      <p>
        <button onClick={btnOnClick}>change</button>
      </p>
    </article>
    </div>
  )
}

