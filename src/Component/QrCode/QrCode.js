import React, { Component } from "react";
import QRCode from "qrcode.react";
const Data = () => {
  
    return (
      <div>
        <h1>
          QR Code
        </h1>
        <QRCode
        id='abc'
        value='www.google.com'
        />
      </div>
    );
  }


export default Data;