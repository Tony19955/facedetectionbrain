import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='imagelinkform-container'>
      <p className='app-info-text'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='search-container'>
        <input className='url-input' type='text' onChange={onInputChange} />
        <button className='search-button' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;