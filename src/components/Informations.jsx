import React from 'react';
import { ReactComponent as CryptoSvg } from '../assets/crypto.svg';
import { ReactComponent as ArrowSvg } from '../assets/arrow.svg';
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
        <p className="info-group-1-para">Here you will find multiple crypto-currencies chart in real time and usefull informations about the crypto's market.</p>
      </div>
      <div className="info-group-2">
        <ArrowSvg className="info-arrow-svg" />
        <h3 className="info-call-to-action">Select a <span className="call-to-action-span">tab</span> to start digging...</h3>
      </div>
      <CryptoSvg className="info-crypto-svg" />
    </div>
  )
}
