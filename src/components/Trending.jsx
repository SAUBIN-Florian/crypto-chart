import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTopSeven } from '../redux/reducers/cryptoReducer';
import "../stylesheets/trending.css";

export default function Trending() {

  const state = useSelector(state => state.crypto.topSeven);
  const dispatch = useDispatch();
  const parsedState = state.coins ? state.coins : [];
  const indexBtc = useSelector(state => state.crypto.firstHundred[0].current_price);

  // console.log(state);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");

        if(response.status === 200){
          const data = await response.json();
          dispatch(addTopSeven(data))
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])


  return (
    <div className="trending">
      <h1 className="trending-title"> Top 7 Crypto trending of the day</h1>
      <table className="trending-table">
        <thead className="table-head">
          <tr>
            <th className="head-item">Market Rank</th>
            <th className="head-item">Logo</th>
            <th className="head-item">Name</th>
            <th className="head-item">Price $</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {parsedState.map((element, index) => {
            return <tr className={`trending-table-result translate-${index + 1}`} key={index}>
                      <td className="body-item rank"># {element.item.market_cap_rank}</td>
                      <td className="body-item img">
                        <img src={element.item.small} alt="crypto-currency" />
                      </td>
                      <td className="body-item name">{element.item.name}</td>
                      <td className="body-item price">{Math.round(element.item.price_btc * indexBtc * 100) / 100}$</td>
                   </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
