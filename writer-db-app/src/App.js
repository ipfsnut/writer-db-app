import React, { useState, useEffect } from "react";
import MetamaskLogin from "./MetamaskLogin";
import AuthorForm from "./AuthorForm";
import axios from "axios";

function App() {
  const [address, setAddress] = useState("");
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      if (address) {
        try {
          const response = await axios.get(`http://localhost:5000/get_author/${address}`);
          setAuthor(response.data);
        } catch (error) {
          console.error("Error fetching author information:", error);
        }
      }
    };
    fetchAuthor();
  }, [address]);

  const handleLogin = (walletAddress) => {
    setAddress(walletAddress);
  };

  const handleAuthorFormSuccess = (authorData) => {
    setAuthor(authorData);
  };

  return (
    <div>
      <MetamaskLogin onLogin={handleLogin} />
      {address && !author && (
        <AuthorForm walletAddress={address} onSuccess={handleAuthorFormSuccess} />
      )}
      {author && (
        <div>
          <h1>Hello, {author.author_name}</h1>
          <p>Book Title: {author.book_title}</p>
          <p>Contract Address: {author.contract_address}</p>
          <p>Blockchain: {author.blockchain}</p>
        </div>
      )}
    </div>
  );
}

export default App;
