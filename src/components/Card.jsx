import React, { Component } from 'react';
import '../styles.css'

class Card extends Component {
    state = {  } 
    render() { 
        return (
            <div className='card-item'>
                <div className='img-div'>
                    <img src='https://react-projects-5-menu.netlify.app/images/item-1.jpeg' alt=''/>
                </div>
                <div className='text-div'>
                    <div className='header-text'>
                        <h4>Buttermilk Pancakes</h4>
                        <h4>15 $</h4>
                    </div>
                    <div className='body-text'>
                    <p className='dots-line'>.............................................................</p>
                    I'm baby woke mlkshk wolf bitters live-edge blue bottle, 
                    hammock freegan copper mug whatever cold-pressed       
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;