import React from "react";
import ReactDOM from "react-dom/client";
import Trendyolönecikanlar from "./Trendyolönecikanlar";
import TrendyolSepetimOrnegi from "./TrendyolSepetimOrnegi";
import Trendyolgiris from "./Trendyolgiris";
import AvantajliUrunlerKategori from "./avantajliurunkategori";
import Header from "./header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Trendyolgiris />
    <Header />
    <Trendyolönecikanlar />
    <AvantajliUrunlerKategori />
    <TrendyolSepetimOrnegi />
  </React.StrictMode>
);
