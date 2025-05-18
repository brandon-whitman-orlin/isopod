import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import "./armadillidium_maculatum.css";

import data from './armadillidium_maculatum.json'; // Import JSON data

function Armadillidium_maculatum() {
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
            message: "Armadillidium maculatum page is coming soon",
            cta: "Want to work on this article with us?",
          },
        });
      } else {
        console.log("Finished article");
      }
    }
  }, [isopodData]);

  return (
    <p>Armadillidium maculatum page coming soon :D</p>
  );
}

export default Armadillidium_maculatum;
