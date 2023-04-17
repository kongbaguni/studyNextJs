import Head from 'next/head'
import styles from '../styles/Home.module.css';
import '../instance/GameManager';
import { GameManager } from '../instance/GameManager';
import Image from 'next/image';
import '../extensions/Array';
import { Card } from '../models/Card';
import React from 'react';
GameManager.getInstance().addCardShuffle();

class Home extends React.Component {    
  state = { count: 0,  cards : [] , images : [],  handRank: "" };

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      cards : Array<Card>(),
      images : [],
      handRank  : ''
    }    
  }

  
  public popFiveCard = ()=> {
    console.log("popFiveCard");
    const newCards = [
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard(),
      GameManager.getInstance().popCard()
    ];
    
    console.log(newCards);
  
    this.setState({
      images : [
        newCards[0].image,
        newCards[1].image,
        newCards[2].image,
        newCards[3].image,
        newCards[4].image,
      ]
    });

    this.setState({
      cards : newCards
    });
    this.setState({  
      count:GameManager.getInstance().getCardDeckLength()
    });

    const rank = GameManager.getInstance().getHandRank(newCards);
    console.log("hand Rank : " + rank);
    this.setState({
      ["handRank"] : rank
    });
  }
  
  handleClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  btnOnClick = ()=> {
    this.popFiveCard();
    console.log("btnOnClick : " + this.state.count)
  }
  
  list = ()=> {
    return (      
      <p>
      <Image src={this.state.images[0]} alt='' width={100} height={200}/>
      <Image src={this.state.images[1]} alt='' width={100} height={200}/>
      <Image src={this.state.images[2]} alt='' width={100} height={200}/>
      <Image src={this.state.images[3]} alt='' width={100} height={200}/>
      <Image src={this.state.images[4]} alt='' width={100} height={200}/>
      </p>
    )
  }
  render = ()=> {
    return (
      <div>
      <h1>Poker</h1>
      <article>
        <header><h2>Card</h2></header>
        카드 덱에 남은 카드 : {this.state.count}개
        {this.list()}
        <p>{this.state.handRank}</p>
        <button onClick={this.btnOnClick}>change</button>
      </article>
      </div>
    )
  }  
  componentDidMount(): void {
      this.popFiveCard();
  }
}
export default Home;
