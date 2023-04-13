import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../instance/GameManager'
import { GameManager } from '../instance/GameManager'
import Image from 'next/image'
import '../extensions/Array'
import React, { ReactNode, useState } from 'react';
import { Card } from '../models/Card'

GameManager.getInstance().addCardShuffle()

let cards = Array<Card>()
  
function popFiveCard() {
  cards = [
    GameManager.getInstance().popCard(),
    GameManager.getInstance().popCard(),
    GameManager.getInstance().popCard(),
    GameManager.getInstance().popCard(),
    GameManager.getInstance().popCard(),
  ]
}

function list() {
  if (cards.length == 0 ) {
    popFiveCard()
  }
  return (
    <p>
      <Image src={cards[0].getImage()} alt='카드' width={100} height={200} />
      <Image src={cards[1].getImage()} alt='카드' width={100} height={200} />
      <Image src={cards[2].getImage()} alt='카드' width={100} height={200} />
      <Image src={cards[3].getImage()} alt='카드' width={100} height={200} />
      <Image src={cards[4].getImage()} alt='카드' width={100} height={200} />
    </p>  
  )
}

export default function Home() {
  
  const [reverse, setReverse] = useState(false);

  const reverseItems = () => {
    setReverse(!reverse);
  };

  function btnOnClick() {
    setReverse(!reverse);
    popFiveCard();
  }
  
  return (
    <div>
    <h1>Poker</h1>
    <article>
      <header><h2>Card</h2></header>
        {list()}
      <p>
        <button onClick={btnOnClick}>change</button>
      </p>
    </article>
    </div>
  )
}

