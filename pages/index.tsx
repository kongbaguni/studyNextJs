import styles from '../styles/Home.module.css';
import { GameManager } from '../instance/GameManager';
import Image from 'next/image';
import '../instance/GameManager';
import '../extensions/Array';
import { Card } from '../models/Card';
import React from 'react';
import footer from './footer';
import backImg from '../images/back.svg';
import navigation from './navigation';

GameManager.getInstance().addCardShuffle();

class Home extends React.Component {    
  state = { count: 0,  cards : [] , images : [], deckImages: [] ,handRank: "" };

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      cards : Array<Card>(),
      images : [],
      deckImages : [],
      handRank  : ''
    }    
  }

  
  popFiveCard = ()=> {
    console.log("popFiveCard");
    const newCards = GameManager.getInstance().popCard(5);
    
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

    const rank = GameManager.getInstance().getHandRank(newCards).value;
    console.log("hand Rank : " + rank);
    this.setState({
      ["handRank"] : rank
    });
    let newDeckImages = []
    for(let i=0; i<GameManager.getInstance().getCardDeckLength(); i++) {
      newDeckImages.push(backImg)      
    }
    this.setState({
      deckImages : newDeckImages
    })
  }
  
  handleClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  btnOnClick = ()=> {
    this.popFiveCard();
    console.log("btnOnClick : " + this.state.count)
  }
  
  deck = () => {
    return (
      <p className={styles.deck}>
        {
          this.state.deckImages.map(image=> (                      
            <Image src={image} alt='' width={30} height={60}/>
          ))          
        } 
      </p>
    )
  }

  list = ()=> {
    return (      
      <p>
        {
          this.state.images.map(image => (
            <Image src={image} alt='' width={100} height={200}/>
          ))
        }
      </p>
    )
  }
  render = ()=> {
    return (
      <div className={styles.main}>        
        {navigation("home")}
      <article>
        <header><h2>Card Shuffle Test</h2></header>
        {this.deck()}
        <p className='tooltip'>카드 덱에 남은 카드 : {this.state.count}개</p>
        {this.list()}
        <p>{this.state.handRank}</p>
        <p><button onClick={this.btnOnClick}>change</button></p>
      </article>
      {footer()}
      </div>
    )
  }  
  componentDidMount(): void {
      this.popFiveCard();
  }
}
export default Home;
