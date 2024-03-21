import React from "react";
import checkImg from "../../assets/Checkmark.png";

export const PricingCards = () => {
  return (
    <div className="pricing_cards-container">
      <div className="pricing_card left">
        <div>
          <p>1 USER</p>
          <h4>FREE</h4>
          <h4>
            <span>$0/month</span>
          </h4>
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            {" "}
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            {" "}
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
      <div className="pricing_card middle">
        <div>
          <p>1 USER</p>
          <h4>FREE</h4>
          <h4>
            <span>$0/month</span>
          </h4>
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
      <div className="pricing_card right">
        <div>
          <p>1 USER</p>
          <h4>FREE</h4>
          <h4>
            <span>$0/month</span>
          </h4>
        </div>
        <ul>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
          <li>
            <img src={checkImg} />
            Access on all devices
          </li>
        </ul>
        <button className="button">FREE TRIAL</button>
      </div>
    </div>
  );
};
