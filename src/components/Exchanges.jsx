import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExchanges } from '../redux/reducers/cryptoReducer';
import "../stylesheets/exchanges.css";

export default function Exchanges() {

  const state = useSelector(state=> state.crypto.exchanges);
  const dispatch = useDispatch();

  // SET VARIABLES FOR DISPLAYED DATA
  const [index, setIndex] = useState(0);
  const slicedState = state[0] ? state.slice(index, index + 9): [];

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch("https://api.coingecko.com/api/v3/exchanges?per_page=45");
        if(response.status === 200){
          const data = await response.json();
          dispatch(addExchanges(data))
        }
      }catch(err){
        console.log(err)
      }
    })()
  }, [])

  const handlePagination = (e) => {
    if(e.target.classList.contains("btn-down")){
      if(index > state.length - 10) return setIndex(0);
      setIndex(index + 9);
    }else{
      if(index <= 0) return setIndex(state.length - 9);
      setIndex(index - 9);
    }
  }

  return (
    <div className="exchanges">
      {/* <h1 className="exchanges-title">List of Websites where you can exchange crypto-currencies</h1> */}
      <div className="grid-wrapper">
        {slicedState.map((element, index) => {
          return <div className="grid-item" key={index}>
            <img className="grid-item-img" src={element.image} alt="crypto-logo" />
            <p className="grid-item-rank">Rank: {element.trust_score_rank}</p>
            <h2 className="grid-item-title">{element.name}</h2>
            <p className="grid-item-para">Last 24h Btc traded: <br /> 
              <span className="grid-item-para-span">{Math.round(element.trade_volume_24h_btc * 100) / 100}</span>
              <i className="fa-brands fa-bitcoin"></i>
            </p>
            <a className="grid-item-link" href={element.url} rel="noreferrer" target="_blank">Website...</a>
          </div>
        })}
      </div>
      <ul className="pagination">
        <li className="pagination-btn btn-up" onClick={handlePagination}>
          <i className="fa-solid fa-caret-up btn-up"></i>
        </li>
        <li className="pagination-btn btn-down" onClick={handlePagination}>
          <i className="fa-solid fa-caret-down btn-down"></i>
        </li>
      </ul>
    </div>
  )
}
