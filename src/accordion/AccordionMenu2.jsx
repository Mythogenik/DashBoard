import React, { useState } from 'react';
import './Accordion.css'

const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
  };
  const menuItems = [
    {
      title: 'Icons >',
      contents: ['> Font Awesome', '> Material Design Icon', '> Simpleline Icons','> Flag Icons', '> Pe7 Icons', '> Themify Icons'],
    },
  ];


  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            className="accordion-header"
            onClick={() => handleItemClick(index)}
          > <br/>&nbsp;
            &nbsp;&nbsp;&nbsp; <button class="text-button" >{item.title}</button>&nbsp;
          </div>
          {expandedItem === index && (
            <div className="accordion-content">
              {item.contents.map((content, contentIndex) => (
                <div key={contentIndex}> <br/>&nbsp;{content}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;