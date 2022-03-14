import { useState } from 'react';
import { useDispatch } from "react-redux";
import { selectedMenu } from '../redux/reducers/menuReducer';
import "../stylesheets/board.css";

export default function LeftBoard() {

  const [toggle, setToggle] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(e.target.innerText);
    dispatch(selectedMenu(e.target.innerText))
  }

  return (
    <div className="left-board">
      <h1>Cryptanalyze.</h1>
      <ul className="list-menu">
        <li className={`list-item ${toggle === "Dashboard" && "active-item"}`} onClick={handleClick}>
          <i className="fa-solid fa-coins"></i>
          Dashboard
        </li>
        <li className={`list-item ${toggle === "Top 7 Trending" && "active-item"}`} onClick={handleClick}>
          <i className="fa-solid fa-chart-line"></i>
          Top 7 Trending
        </li>
        <li className={`list-item ${toggle === "Exchanges" && "active-item"}`} onClick={handleClick}>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          Exchanges
        </li>
        <li className={`list-item ${toggle === "Markets" && "active-item"}`} onClick={handleClick}>
          <i className="fa-solid fa-comments-dollar"></i>
          Markets
        </li>
        <li className={`list-item ${toggle === "Search Crypto" && "active-item"}`} onClick={handleClick}>
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
          Search Crypto
        </li>
      </ul>
      <h2>OTHERS</h2>
      <ul className="other-menu">
        <li className="other-item">Settings</li>
        <li className="other-item">Credits</li>
      </ul>
    </div>
  )
}
