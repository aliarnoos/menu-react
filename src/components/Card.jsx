import React, { Component } from 'react';
import '../styles.css'

class Card extends Component {
    state = {  } 
    render() { 
        return (
            <div className='card-item'>
                <div className='img-div'>
                    <img src={this.props.img} alt='food picture'/>
                </div>
                <div className='text-div'>
                    <div className='header-text'>
                        <h4>{this.props.title}</h4>
                        <h4 className='price'>{this.props.price}$</h4>
                    </div>
                    <div className='body-text'>
                    <p className='dots-line'>.............................................................</p>
                        {this.props.desc}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;