import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
      </div>
      <div className="homeRow">
        <Product
          id="1"
          title="LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T65SKSF4Z, Middle Free Silver)"
          image="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg"
          price="15990"
          rating={4}
        />
        <Product
          id="2"
          title="Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)"
          image="https://m.media-amazon.com/images/I/619jtWsN0cL._AC_UY327_FMwebp_QL65_.jpg"
          price="52999"
          rating={5}
        />
      </div>
      <div className="homeRow">
        <Product
          id="3"
          title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
          image="https://images-eu.ssl-images-amazon.com/images/I/616bhfyXimL._AC_UL200_SR200,200_.jpg"
          price="1999"
          rating={4}
        />
        <Product
          id="4"
          title="Think Like a Monk By Jay Shetty"
          image="https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR200,200_.jpg"
          price="388.00"
          rating={5}
        />
        <Product
          id="5"
          title="WOW Apple Cider Vinegar No Parabens & Sulphate Shampoo, 300mL"
          image="https://images-eu.ssl-images-amazon.com/images/I/71Qj16dWSSL._AC_UL200_SR200,200_.jpg"
          price="349.00"
          rating={3}
        />
      </div>
      <div className="homeRow">
        <Product
          id="6"
          title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand)"
          image="https://images-na.ssl-images-amazon.com/images/I/71EO3uGdJbL._SX522_.jpg"
          price="62899"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
