import React from 'react';
import {
  Card,
  Info,
  Title,
  Poster,
  Rating,
  Released,
} from './GameCardStyled';


export default GameCard = (props) => {
  return (
    <Card>
      <Poster source={{uri: props.game.background_image}} />
      <Info>
        <Title>
          {props.game.name}
        </Title>
        <Released>
          {props.game.released}
        </Released>
        <Rating>{props.game.rating}</Rating>
      </Info>
    </Card>
  );
};
