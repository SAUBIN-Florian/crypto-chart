import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFirstHundred } from '../redux/reducers/cryptoReducer';
import "../stylesheets/informations.css";

export default function Informations() {

  const dispatch = useDispatch();

  useEffect(()=>{
    (async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      const data = await response.json();

      dispatch(addFirstHundred(data))
    })();
  }, []);

  return (
    <div className="informations">
      <div className="info-group-1">
        <h1 className="info-group-1-title">Welcome on Cryptanalyze.</h1>
        <p className="info-group-1-para">
          Here you will find multiple crypto-currencies chart in real time and usefull informations about the crypto's market.
          <br />
          Searching about a specific crypto or for a Top 10 best crypto of the day ? On <span className="span-title">Cryptanalyze.</span> you will find what you want and many more...
        </p>
        <h2 className="info-group-1-call-to-action">
          <i className="fa-solid fa-chevron-left"></i>
          Navigate throught the left board to start digging
        </h2>
      </div>
      <div className="info-group-2">
        <div className="real-time-card">
          <h3 className="real-time-card-title">
            <i className="fa-solid fa-server"></i>
            Real-time Price Data
          </h3>
          <p className="real-time-card-para">Large library about crypto (13,000+ coins) and markets (700+) for you to analyze</p>
        </div>
        <div className="visualize-card">
          <h3 className="visualize-card-title">
            <i className="fa-solid fa-chart-pie"></i>
            Dynamic Graph & Chart
          </h3>
          <p className="visualize-card-para">Neat graphs for a better data analyze approch...</p>
        </div>
      </div>
    </div>
  )
}
