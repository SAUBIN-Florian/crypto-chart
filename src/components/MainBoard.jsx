import React from 'react';
import { useSelector } from 'react-redux';
import Informations from "./Informations";
import Dashboard from "./Dashboard";
import SearchCrypto from "./SearchCrypto";
import Exchanges from "./Exchanges";
import Markets from "./Markets";
import "../stylesheets/board.css";

export default function MainBoard() {

  const state = useSelector(state => state.menu.active)

  const switchCaseRenderer = (param) => {
    switch(param){
      case "Dashboard":
        return <Dashboard />;
      case "Top 7 Trending":
        return <p>Top 7 Trending</p>;
      case "Exchanges":
        return <Exchanges />;
      case "Markets":
        return <Markets />;
      case "Search Crypto":
        return <SearchCrypto />;
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
