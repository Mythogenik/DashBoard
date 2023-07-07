import React, { useState } from 'react';
<link rel="stylesheet" href="/Accordion.css" />

const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
  };
  const menuItems = [
    {
      title: 'Custompages ',
      contents: ['> Register', '> Login', '> Forget Password','> Lock Screen', '> Under construction', '> Coming Soon'],
    },
    {
      title: 'Submenus ',
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
          >
            &nbsp;&nbsp;&nbsp;{item.title}&nbsp;
          </div>
          {expandedItem === index && (
            <div className="accordion-content">
              {item.contents.map((content, contentIndex) => (
                <div key={contentIndex}>{content}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;