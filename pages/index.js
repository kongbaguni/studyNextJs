import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../instance/GameManager'
import { GameManager } from '../instance/GameManager'
import Image from 'next/image'
import '../extensions/Array'
import React, { useState } from 'react';

GameManager.getInstance().addCardShuffle()

let imgsrcs = [
  GameManager.getInstance().popCard().getImage(),
  GameManager.getInstance().popCard().getImage(),
  GameManager.getInstance().popCard().getImage(),
]

let items = ['apple', 'banana', 'orange'];

export default function Home() {
  const [reverse, setReverse] = useState(false);

  const reverseItems = () => {
    setReverse(!reverse);
  };

  function btnOnClick() {
    setReverse(!reverse);
    items = items.shuffle()
    console.log(items)
    imgsrcs = [
      GameManager.getInstance().popCard().getImage(),
      GameManager.getInstance().popCard().getImage(),
      GameManager.getInstance().popCard().getImage(),
    ]
  }
  
  return (
    <div>
    <h1>Poker</h1>
    <article>
      <header><h2>Card</h2></header>
      <ul>
      {reverse
          ? items.slice().reverse().map((item) => (
              <li key={item}>{item}</li>
            ))
          : items.map((item) => (
              <li key={item}>{item}</li>
            ))}
      </ul>

      <ul>
        {imgsrcs.map((item) => {
            <Image src={item} alt='카드' width={100} height={200} />
        })}
      </ul>
      <p>
        <button onClick={btnOnClick}>change</button>
      </p>
    </article>
    </div>
  )
}

