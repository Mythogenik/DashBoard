import React, { useState } from 'react';
import './Accordion.css'

const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
  };
  const menuItems = [
    {
      title: 'Custompages >',
      contents: ['> Register', '> Login', '> Forget Password','> Lock Screen', '> Under construction', '> Coming Soon'],
    },
    {
      title: 'Submenus >',
      contents: ['> Submenu1', '> Submenu2',],
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