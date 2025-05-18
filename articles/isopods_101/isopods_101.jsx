import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import "./isopods_101.css";

import data from './isopods_101.json'; // Import JSON data

function Isopods_101() {
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
            message: "Isopods 101 page is coming soon",
            cta: "Want to work on this article with us?",
          },
        });
      } else {
        console.log("Finished article");
      }
    }
  }, [isopodData]);

  return (
    <p>Isopods 101 page coming soon :D</p>
  );
}

export default Isopods_101;
