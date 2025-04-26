import React, { useEffect, useState } from 'react';
import "./Contents.css";

const Contents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const h2Elements = Array.from(document.querySelectorAll('h2'));
    const tocIndex = h2Elements.findIndex(el => el.textContent.trim() === "Table of Contents");
  
    // Only take elements after the "Table of Contents" heading
    const filteredH2s = tocIndex >= 0 ? h2Elements.slice(tocIndex + 1) : h2Elements;
  
    const headingData = filteredH2s.map((el, index) => {
      let id = el.id || `heading-${index}`;
      el.id = id; // Ensure each h2 has a unique ID
      return { text: el.textContent, id };
    });
  
    setHeadings(headingData);
  }, []);
  

  return (
    <ol className="table-of-contents" type="1">
      {headings.map(({ text, id }) => (
        <li key={id}>
          <a href={`#${id}`}>{text}</a>
        </li>
      ))}
    </ol>
  );
};

export default Contents;
