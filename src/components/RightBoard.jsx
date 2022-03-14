import React from 'react';
import { useSelector } from "react-redux";
import "../stylesheets/board.css";

export default function RightBoard() {

  const state = useSelector(state => state.crypto.global)

  return (
    <div className="right-board">
      <div className="global-status">
        <h1>Crypto Currencies: <span className="global-status-span">{state.active_cryptocurrencies}</span></h1>
        <h1 className="border-element">Markets: <span className="global-status-span">{state.markets}</span></h1>
        <h1 className="sub-border-element"><i className="fa-solid fa-scale-unbalanced"></i>Change rate USD: <span>{state.market_cap_change_percentage_24h_usd} %</span></h1>
      </div>
      <div className="global-percent-market">
        <h1 className="global-percent-title">Top 10 Market %</h1>
      </div>
    </div>
  )
}
