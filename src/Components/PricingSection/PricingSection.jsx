import React, { useState } from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingCards } from "./PricingCards";
import RegisterModal from "../UI/RegisterModal";
import { PlansDescription } from "./PlansDescription";

export const PricingSection = () => {
  const [plan, setPlan] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenRegisterModal=(newPlan)=>{
    console.log(newPlan);
    setPlan(newPlan)
    setShowRegisterModal(true);
  }

  const handleCloseRegisterModal =()=>{
    setShowRegisterModal(false);
  }

  const handleOpenLoginModal= ()=>{
    window.location.href = "http://66.94.104.127:2030/Login.aspx";
  }
  return (
    <div id="pricing">

      <PricingHeader handleOpenRegisterModal={handleOpenRegisterModal} />
     
      <PricingCards showRegisterModal={handleOpenRegisterModal}/>
    
      <PlansDescription/>

      <RegisterModal  show={showRegisterModal} handleClose={handleCloseRegisterModal} handleOpenLogin={handleOpenLoginModal} plan={plan}/>
    </div>
  );
};
