import React, { Component } from 'react';
import css from './UserCard.module.css';
import Logo from '../../img/Logo.png';
import Boy from '../../img/Boy.png';
import icons from '../../img/icons.png';
import  Line  from "../../img/Line.png";

export class UserCard extends Component {
    state = {
        isClick: JSON.parse(localStorage.getItem('isClick')) ?? false,
        }
    
    componentDidUpdate(_, prevState) {
        localStorage.setItem('isClick', JSON.stringify(this.state.isClick));
        }
    onLeaveFeedback = event => {
        event.preventDefault();
        this.setState(prevState => ({isClick: !prevState.isClick}));
        }; 
      render() {              
  return (
    <div className={css.container}>
        <img src={Logo} className={css.logo} alt="Logo"></img>
        <img src={icons} className={css.icons} alt="Icons"></img>
        <img src={Boy} className={css.boy} alt="Boy"></img>
        <img src={Line} className={css.line} alt="Line"></img>
        <p className={css.tweets}>777 TWEETS</p>
        <p className={css.followers}>{!this.state.isClick? '100,500' : '100,501'} FOLLOWERS</p>
        <button type="button" onClick={this.onLeaveFeedback}
            className={!this.state.isClick ? css.button : css.buttonClicked}>
            {!this.state.isClick? 'FOLLOW' : 'FOLLOWING'}
        </button>         
      </div>
  );
}
}
