import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import Data from "../src/assets/openSeaData.json";

Data.toString();
console.log(Data["assets"]);
// const listData = JSON.parse(Data["assets"]);
// console.log(listData);

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getmyNfts = async () => {
      // const openSeaData = await axios.get(
      //   "/assets?asset_contract_address=0x764357B73F7BF85F59660B1Deb1441730c3ce844&order_direction=desc"
      // );
      // setPunkListData(openSeaData.data.assets);
      // console.log(openSeaData.data.assets);
      setPunkListData(Data["assets"]);
    };
    return getmyNfts();
  }, []);
  

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
