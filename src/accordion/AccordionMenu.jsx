import React, { useState } from 'react';
import './Accordion.css'

const AccordionMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem(itemIndex === expandedItem ? null : itemIndex);
  };
  const menuItems = [
    {
      title: 'Elements >',
      contents: ['> Accordion', '> Alerts', '> Avatar','> Badges', '> BreadCrumb', '> Buttons'],
    },
    {
      title: 'Apps >',
      contents: ['> Chats', '> Contacts','> Calendar', '> Cookies','> Counters', '> filemanager'],
    },
    {
      title: 'AdvancedUI >',
      contents: ['> Utilities', '> Widgets', '> Charts', '> Tables'],
    },
    {
      title: 'Landing Page >',
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
          > <br/>&nbsp;
           
            &nbsp;&nbsp;&nbsp; <button class="text-button" >{item.title}</button>&nbsp;
          </div>
          {expandedItem === index && (
            <div className="accordion-content">
              {item.contents.map((content, contentIndex) => (

                <div id='myText' className='hover' key={contentIndex}>
                   <br/>&nbsp;
                  {content}
              
                  </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;