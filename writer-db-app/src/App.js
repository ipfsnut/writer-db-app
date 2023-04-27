import React, { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [address, setAddress] = useState("");

  const handleLogin = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });

        setAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      alert("Metamask is not installed. Please install Metamask and try again.");
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Metamask</button>
      {address && <h1>Hello, {address}</h1>}
    </div>
  );
}

export default App;
