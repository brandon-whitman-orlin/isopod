import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import "./porcellio_scaber.css";

import data from './porcellio_scaber.json'; // Import JSON data

function Porcellio_scaber() {
  const navigate = useNavigate();  // Initialize the navigate function
  const [isopodData, setIsopodData] = useState(null);

  useEffect(() => {
    // Set the JSON data on component mount
    setIsopodData(data);
  }, []);

  useEffect(() => {
    // This runs when isopodData is updated
    if (isopodData) {
      if (isopodData.inProgress) {
        console.log("In progress");
        navigate("/notfound", {
          state: {
            message: "Porcellio scaber page is coming soon",
            cta: "Want to work on this article with us?",
          },
        });
      } else {
        console.log("Finished article");
      }
    }
  }, [isopodData]);

  return (
    <p>Porcellio scaber page coming soon :D</p>
  );
}

export default Porcellio_scaber;
