import React, { useState } from 'react';

const Home = () => {
  const [image, setImage] = useState('');
  const [showImage, setShowImage] = useState(false); 

  const displayProduct = (e) => {
    e.preventDefault();  
    setShowImage(true);  
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Add the product</h2>
      <form onSubmit={displayProduct}>
        <label>Product Image URL:</label>
        <input
          type="text"
          name="productimage"
          value={image}
          onChange={(e) => setImage(e.target.value)}  // Update image state on input change
        />
        <br />
        <button type="submit">Submit</button>
      </form>

   
      {showImage && image && (
        <div>
          <h3>Product Image:</h3>
          <img src={image} alt="Product" />
          { console.log(image)}
        </div>
      )}
    </div>
  );
};

export default Home;
