import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';
import "../stylesheets/dashboard.css";

Chart.register(
  LineElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
);

export default function Dashboard() {

  const state = useSelector(state => state.crypto.firstHundred);
  const topTen = state.slice(0, 10);
  const topForChart = state.slice(2, 12)
  const [value, setValue] = useState("");


  // DATA VARIABLES FOR CHARTS
  const topTenName = topForChart.map(obj => obj.name);
  const topTenPrice = topForChart.map(obj => obj.current_price);
  const topTenSupply = topForChart.map(obj => obj.circulating_supply);
  const topTenPercent = topForChart.map(obj => obj.price_change_percentage_24h);

  const setData = (value) => {
    switch(value){
      case "usd":
        return {
          labels: topTenName,
          datasets: [{
            label: '$ for 1 Coin',
            data: topTenPrice,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)'
            ],
            borderWidth: 1
          }]
        };
      case "supply":
        return {
          labels: topTenName,
          datasets: [{
            label: 'Number of Coins',
            data: topTenSupply,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)'
            ],
            borderWidth: 1
          }]
        };
      case "percent":
        return {
          labels: topTenName,
          datasets: [{
            label: 'Percentage Change in 24h',
            data: topTenPercent,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)'
            ],
            borderWidth: 1
          }]
        };
      default:
        return {
          labels: ["", "", "", "", "", "", "", "", "", ""],
          datasets: [{
      
          }]
        }
    }
  }

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

  const setChartTitle = (value) => {
    switch(value){
      case "usd":
        return <h1 className="dash-chart-title">Price in USD</h1>;
        case "supply":
          return <h1 className="dash-chart-title">Circulating Supply</h1>;
        case "percent":
          return <h1 className="dash-chart-title">Cap Change 24h in %</h1>;
        default:
        return <h1 className="dash-chart-title">Choose an option {">>"}</h1>;
    }
  }

  const handleActive = (e) => {
    e.preventDefault();
    setValue(e.target.dataset.name);
  }

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
      <div className="dash-chart">
        <div className="dash-chart-nav">
          {setChartTitle(value)}
          <ul className="chart-nav-btn">
            <li className={`nav-btn ${value === "usd" && "active"}`} data-name="usd" onClick={handleActive}>Price USD</li>
            <li className={`nav-btn ${value === "supply" && "active"}`} data-name="supply" onClick={handleActive}>Supply</li>
            <li className={`nav-btn ${value === "percent" && "active"}`} data-name="percent" onClick={handleActive}>% Change</li>
          </ul>  
        </div>
        <Bar data={setData(value)} className="bar"/>
      </div>
    </div>
  )
}
