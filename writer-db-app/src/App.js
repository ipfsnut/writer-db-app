import React, { useState } from "react";
import MetamaskLogin from "./MetamaskLogin";

function App() {
  const [address, setAddress] = useState("");

  const handleLogin = (walletAddress) => {
    setAddress(walletAddress);
  };

  return (
    <div>
      <MetamaskLogin onLogin={handleLogin} />
      {address && <h1>Hello, {address}</h1>}
    </div>
  );
}

export default App;
