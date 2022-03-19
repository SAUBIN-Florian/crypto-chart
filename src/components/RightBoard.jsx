import React from 'react';
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip} from 'chart.js'
import "../stylesheets/board.css";

Chart.register(ArcElement, Tooltip);

export default function RightBoard() {

  const state = useSelector(state => state.crypto.global);
  const capMarketKeys = state.market_cap_percentage ? Object.keys(state.market_cap_percentage) : [];
  const capMarketValues = state.market_cap_percentage ? Object.values(state.market_cap_percentage) : [];
  const capMarketValuesParsed = capMarketValues.map(num => Math.round(num * 100) / 100)
  
  const data = {
    labels: capMarketKeys,
    datasets: [{
      data: capMarketValuesParsed,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      hoverOffset: 5,
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)'
      ]
    }]
  };

  return (
    <div className="right-board">
      <div className="global-status">
        <h1>Crypto Currencies: <span className="global-status-span">{state.active_cryptocurrencies}</span></h1>
        <h1 className="border-element">Markets: <span className="global-status-span">{state.markets}</span></h1>
        <h1 className="sub-border-element"><i className="fa-solid fa-scale-unbalanced"></i>Change rate USD: <span>{state.market_cap_change_percentage_24h_usd} %</span></h1>
      </div>
      <div className="global-percent-market">
        <h1 className="global-percent-title">Top 10 Market Share in %</h1>
        <Doughnut data={data} className="doughnut" />
      </div>
    </div>
  )
}
