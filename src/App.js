import React, { Component } from 'react';
import Card from './components/Card';
import './styles.css'
import data from './data'

function App () {
  const cards = data.map(card => <Card key={card.id} title={card.title} category={card.category} price={card.price} img={card.img} desc={card.desc} />)
  const [menu, setMenu] = React.useState(cards)

  const filterCards = (cate) => {
    const newdata = data.filter(card => card.category === cate );
    const newCards = newdata.map(card =><Card key={card.id} title={card.title} category={card.category} price={card.price} img={card.img} desc={card.desc} />)
    setMenu(newCards)
  }
  const allCards = () =>{
    setMenu(cards)
    }
    return (
      <div className='main'>
        <div className='nav-btns'>
          <button onClick={allCards}>All</button>
          <button onClick={()=> filterCards('breakfast')}>Breakfast</button>
          <button onClick={()=> filterCards('lunch')}>Lunch</button>
          <button onClick={()=> filterCards('shakes')}>Shakes</button>
        </div>
        <div className='main-div'>
          {menu}
        </div>
      </div>
    );
  }


export default App;

