import React, { useState } from "react";
import './App.css'
import Data from "./Component/QrCode/QrCode";



const LoggingButton = () => {
  const [qr, setQr] = useState(false);
  const handleclick = () => {setQr(true);
    console.log('alert', this);
  }
  const [marketList, setMarketList] = useState([])
  console.log(marketList);
  function LoggingButton(props) {
    console.log("window.location.pathname",window.location.pathname);
    if(window.location.pathname === "/") {
      <LoggingButton/>
    
    }
  }
  return  ( 
    <div>
      <header className="header">
        SLIPSMART MARKET
      </header>
      <div className="buttonWrapper">
        <button onClick={()=>setMarketList([...marketList,'Ekmek'])} className="button">
          Ekmek
        </button>
        <button onClick={()=>setMarketList([...marketList,'Süt'])} className="button">
          Süt
        </button>
        <button onClick={()=>setMarketList([...marketList,'Yumurta'])} className="button">
          Yumurta
        </button >
        <button onClick={()=>setMarketList([...marketList,'Yağ'])} className="button">
          Yağ
        </button>
      </div>
      <div className="buttonWrapper1">
        <button onClick={()=>setMarketList([...marketList,'T-shirt'])} className="button">
          T-shirt
        </button>
        <button onClick={()=>setMarketList([...marketList,'Pantolon'])} className="button">
          Pantolon
        </button>
        <button onClick={()=>setMarketList([...marketList,'Çorap'])} className="button">
          Çorap
        </button>
        <button onClick={()=>setMarketList([...marketList,'Kazak'])} className="button"> 
          Kazak
        </button>
      </div>
      <div className="summaryWrapper">
        <div className="shopSummary">
          ALIŞVERİŞ ÖZETi
        </div>
        <button onClick={() => handleclick()} className="payButton">
          ÖDE
        </button>
      </div>
      <div>
        {
          marketList.length>0  && marketList.map((element)=>
          <ul>
            <li>
              {element}
            </li>
          </ul>
          )        }
      </div>
      {qr && <Data/>}
    </div>
      )
};
export default LoggingButton;