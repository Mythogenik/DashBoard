import React, { useState } from 'react';
<link rel="stylesheet" href="/Accordion.css" />

const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
  };
  const menuItems = [
    {
      title: 'Elements ',
      contents: ['> Accordion', '> Alerts', '> Avatar','> Badges', '> BreadCrumb', '> Buttons'],
    },
    {
      title: 'Apps',
      contents: ['> Chats', '> Contacts','> Calendar', '> Cookies','> Counters', '> filemanager'],
    },
    {
      title: 'AdvancedUI',
      contents: ['> Utilities', '> Widgets', '> Charts', '> Tables'],
    },
    {
      title: 'Landing Page',
      contents: [],
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