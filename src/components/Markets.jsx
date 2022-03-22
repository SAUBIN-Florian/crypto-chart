import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMarkets } from '../redux/reducers/cryptoReducer';
import "../stylesheets/markets.css";

export default function Markets() {

  const state = useSelector(state=> state.crypto.markets);
  const dispatch = useDispatch();

  // SET VARIABLES FOR DISPLAYED DATA
  const [index, setIndex] = useState(0);
  const slicedState = state[0] ? state.slice(index, index + 7): [];

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch("https://api.coingecko.com/api/v3/coins/categories");
        if(response.status === 200){
          const data = await response.json();
          dispatch(addMarkets(data))
        }
      }catch(err){
        console.log(err)
      }
    })()
  }, [])

  const handlePagination = (e) => {
    if(e.target.classList.contains("btn-down")){
      if(index > state.length - 7) return;
      setIndex(index + 7);
    }else{
      if(index <= 0) return;
      setIndex(index - 7);
    }
  }

  return (
    <div className="markets">
      <h2 className="markets-title">Top Cryptocurrency Categories by Market Cap</h2>
      <p className="markets-description">
        The ranking of cryptocurrency categories is based on market capitalization.
        <br />
        Note: Some cryptocurrencies may overlap in multiple categories.
      </p>
      <table className="markets-list">
        <thead className="markets-header">
          <tr>
            <th className="item-header">Categories</th>
            <th className="item-header">Best Currencies</th>
            <th className="item-header">24h</th>
            <th className="item-header">Market capitalization</th>
            <th className="item-header">24 hour volume</th>
          </tr>
        </thead>
        <tbody className="markets-item">
          {slicedState.map((item, index) => {
            return <tr key={index}>
              <td className="item-column">{item.name}</td>
              <td className="item-img">
                <img src={item.top_3_coins[0]} alt="best-crypto" />
                <img src={item.top_3_coins[1]} alt="best-crypto" />
                <img src={item.top_3_coins[2]} alt="best-crypto" />
              </td>
              <td className={`item-column ${item.market_cap_change_24h >= 0 ? "positive" : "negative"}`}>
                {item.market_cap_change_24h >= 0 ?
                  <i className="fa-solid fa-caret-up"></i>
                :
                  <i className="fa-solid fa-caret-down"></i>
                }
                {Math.round(item.market_cap_change_24h * 100) / 100}%
              </td>
              <td className="item-column">{Math.round(item.market_cap)}&nbsp;$</td>
              <td className="item-column">{Math.round(item.volume_24h)}&nbsp;$</td>
            </tr> 
          })}
        </tbody>
      </table>
      <ul className="pagination-markets">
        <li className="pagination-btn-markets btn-up" onClick={handlePagination}>
          <i className="fa-solid fa-caret-up btn-up"></i>
        </li>
        <li className="pagination-btn-markets btn-down" onClick={handlePagination}>
          <i className="fa-solid fa-caret-down btn-down"></i>
        </li>
      </ul>
    </div>
  )
}
