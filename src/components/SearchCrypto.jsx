import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from '../redux/reducers/cryptoReducer';
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, CategoryScale, Tooltip } from "chart.js";
import "../stylesheets/searchCrypto.css";

Chart.register(LineElement, PointElement, CategoryScale, Tooltip);

export default function SearchCrypto() {


  const state = useSelector(state => state.crypto.query);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");

  // SET VARIABLES FOR CHART DATA:
  const sevenDate = state[0] ? state.map(arr => arr[0]) : [];
  const sevenHigh = state[0] ? state.map(arr => arr[2]) : [];
  const sevenLow = state[0] ? state.map(arr => arr[3]) : [];

  const fetchQuery = async (query) => {
      try{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${query}/ohlc?vs_currency=usd&days=7`);
        const data = await response.json();

        setError("");
        dispatch(setQuery(data));
      }catch(err){
        console.log(err)
        setError(err.error);
      }
  }

  const handleForm = (e) => {
    e.preventDefault();
    fetchQuery(e.target.children[1].value.toLowerCase());
    if(error !== "") return setTitle(e.target.children[1].value);
    setInput("");
  }

  const setDataForChart = (date, high, low) => {
    return {
      labels: date,
      datasets: [{
        label: "Highest price of the day",
        data: high,
        borderColor: 'rgba(255, 99, 132, 1)'
      },
      {
        label: "Lowest price of the day",
        data: low,
        borderColor: 'rgba(75, 192, 192, 1)'
      }]
    };
  }

  return (
    <div className="search-crypto">
      <form className="search-form" onSubmit={handleForm}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          className="search-input" 
          type="text" 
          placeholder="Search for a Crypto..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {error !== "" && <p className="error-msg">This crypto-currency doesn't exist yet...</p> }
      </form>
      <div className="result-chart">
        <h1 className="result-chart-title">Last 7 Days {title} Price in $</h1>
        <Line data={setDataForChart(sevenDate, sevenHigh, sevenLow)} className="result-chart-line" />
      </div>
    </div>
  )
}
