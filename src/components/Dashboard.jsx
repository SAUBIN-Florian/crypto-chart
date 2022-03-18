import React from 'react';
import { useSelector } from 'react-redux';
import "../stylesheets/dashboard.css";

export default function Dashboard() {

  const state = useSelector(state => state.crypto.firstHundred);
  const topTen = state.slice(0, 10);

  const handleArrow = (value) => {
    switch(true) {
      case value > 0:
        return <i className="fa-solid fa-arrow-trend-up arrow-trend" style={{color: "#21cc9e"}}></i>;
      case value < 0:
        return <i className="fa-solid fa-arrow-trend-down arrow-trend" style={{color: "#ff708b"}}></i>;
      default:
        return;
    }
  }

  const handlePercent = (value, rank) => {
    switch(true) {
      case value > 0:
        return <p className={`card-current-price`}>
          ${topTen[rank].current_price}  
          <span style={{color: "#21cc9e"}}>
            <i style={{color: "#21cc9e"}} className="fa-solid fa-caret-up"></i>
            &nbsp;{topTen[rank].price_change_percentage_24h}%
          </span>
        </p>;
      case value < 0:
        return <p className={`card-current-price`}>
          ${topTen[rank].current_price}  
          <span style={{color: "#ff708b"}}>
            <i style={{color: "#ff708b"}} className="fa-solid fa-caret-down"></i>
            &nbsp;{topTen[rank].price_change_percentage_24h}%
          </span>
        </p>;
      default:
        return;
    }
  }

  console.log(topTen);

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card-1">
          <h1 className="card-1-title">Rank 1: {topTen[0].name}</h1>
          {handlePercent(topTen[0].market_cap_change_percentage_24h, 0)}
          <p className="card-subtitle">Market cap: <span className="sub-0-span">${topTen[0].market_cap}</span></p>
          {handleArrow(topTen[0].market_cap_change_percentage_24h)}
        </div>
        <div className="card-2">
          <h1 className="card-2-title">Rank 2: {topTen[1].name}</h1>
          {handlePercent(topTen[1].market_cap_change_percentage_24h, 1)}
          <p className="card-subtitle">Market cap: <span className="sub-1-span">${topTen[1].market_cap}</span></p>
          {handleArrow(topTen[1].market_cap_change_percentage_24h)}
        </div>
      </div>
      <div className="dash-chart"></div>
    </div>
  )
}
