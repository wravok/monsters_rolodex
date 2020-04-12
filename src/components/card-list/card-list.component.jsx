import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) => {
    console.log(props);

  //display monsters
  const displayMonsters = () => (
    props.monsters.map( monster => (
      <Card key={monster.id} monster={monster} /> )
    )
  );
    

    return (
        <div className='card-list'>
            {displayMonsters()}
        </div>
    )
};