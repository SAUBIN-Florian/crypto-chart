import React from 'react';
import { useSelector } from 'react-redux';
import Informations from "./Informations";
import "../stylesheets/board.css";

export default function MainBoard() {

  const state = useSelector(state => state.menu.active)

  const switchCaseRenderer = (param) => {
    switch(param){
      case "Dashboard":
        return <p>Dashboard</p>;
      case "Top 7 Trending":
        return <p>Top 7 Trending</p>;
      case "Exchanges":
        return <p>Exchanges</p>;
      case "Markets":
        return <p>Markets</p>;
      case "Search Crypto":
        return <p>Search Crypto</p>;
      default:
        return <Informations />
    }
  }

  return (
    <div className="main-board">
      {switchCaseRenderer(state)}
    </div>
  )
}
