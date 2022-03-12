import React from 'react';
import { useDispatch } from "react-redux";
import { selectedMenu } from '../redux/reducers/menuReducer';
import "../stylesheets/board.css";

export default function LeftBoard() {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(selectedMenu(e.target.innerText))
  }

  return (
    <div className="left-board">
      <ul className="list-menu">
        <li className="list-item" onClick={handleClick}>Dashboard</li>
        <li className="list-item" onClick={handleClick}>Favorite</li>
        <li className="list-item" onClick={handleClick}>Messages</li>
        <li className="list-item" onClick={handleClick}>Order Lists</li>
        <li className="list-item" onClick={handleClick}>Product Stock</li>
      </ul>
    </div>
  )
}
