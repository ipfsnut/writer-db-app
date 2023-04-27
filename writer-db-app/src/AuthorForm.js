import React, { useState } from "react";
import axios from "axios";

const AuthorForm = ({ walletAddress, onSuccess }) => {
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [blockchain, setBlockchain] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/add_author", {
        wallet_address: walletAddress,
        author_name: authorName,
        book_title: bookTitle,
        contract_address: contractAddress,
        blockchain: blockchain,
      });

      if (response.data.status === "success") {
        onSuccess({
          wallet_address: walletAddress,
          author_name: authorName,
          book_title: bookTitle,
          contract_address: contractAddress,
          blockchain: blockchain,
        });
      } else {
        alert("Error: Could not save your information.");
      }
    } catch (error) {
      console.error("Error submitting author information:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="authorName">Author Name:</label>
        <input
          id="authorName"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bookTitle">Book Title:</label>
        <input
          id="bookTitle"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contractAddress">Contract Address:</label>
        <input
          id="contractAddress"
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="blockchain">Blockchain:</label>
        <input
          id="blockchain"
          type="text"
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthorForm;
