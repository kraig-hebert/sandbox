// import basics
import React from 'react';
import './main.css';
import ChessWebAPI from 'chess-web-api/src/chess-web-api';

const Main = () => {
  const chessAPI = new ChessWebAPI();
  const playerData = (username, year, month) => {
    chessAPI.getPlayerMultiGamePGN(username, year, month).then((response) => {
      console.log('Player Profile', response.body);
    });
  };

  playerData('PinsNicety', 2022, 6);
  return <div>Main</div>;
};

export default Main;
