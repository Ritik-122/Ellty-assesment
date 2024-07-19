import React, { useState } from 'react';
import './MyComponent.css';

function MyComponent() {
  const [selectedPages, setSelectedPages] = useState([]);

  const handlePageSelect = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleAllPagesSelect = () => {
    if (selectedPages.length === 4) {
      setSelectedPages([]);
    } else {
      setSelectedPages(['Page 1', 'Page 2', 'Page 3', 'Page 4']);
    }
  };

  return (
    <div className="page-selection">
      <div className="page-options">
        <div className="page-option">
          <label htmlFor="all-pages">All pages</label>
          <input
            type="checkbox"
            id="all-pages"
            checked={selectedPages.length === 4}
            onChange={handleAllPagesSelect}
          />
        </div>
        <hr/>
        <div className="page-option">
          <label htmlFor="page-1">Page 1</label>
          <input
            type="checkbox"
            id="page-1"
            checked={selectedPages.includes('Page 1')}
            onChange={() => handlePageSelect('Page 1')}
          />
        </div>
        <div className="page-option">
          <label htmlFor="page-2">Page 2</label>
          <input
            type="checkbox"
            id="page-2"
            checked={selectedPages.includes('Page 2')}
            onChange={() => handlePageSelect('Page 2')}
          />
        </div>
        <div className="page-option">
          <label htmlFor="page-3">Page 3</label>
          <input
            type="checkbox"
            id="page-3"
            checked={selectedPages.includes('Page 3')}
            onChange={() => handlePageSelect('Page 3')}
          />
        </div>
        <div className="page-option">
          <label htmlFor="page-4">Page 4</label>
          <input
            type="checkbox"
            id="page-4"
            checked={selectedPages.includes('Page 4')}
            onChange={() => handlePageSelect('Page 4')}
          />
        </div>
        <hr/>
      </div>
      
      <button className="done-button">Done</button>
    </div>
  );
}

export default MyComponent;
