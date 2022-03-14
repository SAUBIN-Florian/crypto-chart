import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addGlobal } from "./redux/reducers/cryptoReducer";
import LeftBoard from "./components/LeftBoard";
import MainBoard from "./components/MainBoard";
import RightBoard from "./components/RightBoard";
import "./stylesheets/App.css";

export default function App() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/global');
      const data = await response.json();

      dispatch(addGlobal(data.data));
    })();
  }, [])

  return (
   <div className="App">
     <LeftBoard />
     <MainBoard />
     <RightBoard />
   </div>
  );
}
