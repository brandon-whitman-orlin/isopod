import React from 'react';
import "./TaxonomyTable.css";

const TaxonomyTable = ({ domain, kingdom, phylum, className, order, suborder, family, genus, species }) => {
  const taxonomy = [
    { level: 'Domain:', value: domain },
    { level: 'Kingdom:', value: kingdom },
    { level: 'Phylum:', value: phylum },
    { level: 'Class:', value: className },
    { level: 'Order:', value: order },
    { level: 'Suborder:', value: suborder },
    { level: 'Family:', value: family },
    { level: 'Genus:', value: genus },
    { level: 'Species:', value: species },
  ];

  return (
    <div className="taxonomy-table">
      <div className="taxonomy-grid">
        {taxonomy.map((item, index) => (
          <React.Fragment key={`${item.level}-${index}`}>
            <div className="taxonomy-cell taxonomy-level">
              {item.level}
            </div>
            <div className="taxonomy-cell taxonomy-value">
              {item.value}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaxonomyTable;
