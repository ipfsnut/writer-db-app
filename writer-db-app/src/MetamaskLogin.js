import React, { useState } from "react";

const MetamaskLogin = ({ onLogin }) => {
  const handleLogin = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        onLogin(accounts[0]);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      alert("Metamask is not installed. Please install Metamask and try again.");
    }
  };

  return <button onClick={handleLogin}>Login with Metamask</button>;
};

export default MetamaskLogin;
