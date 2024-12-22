import React, { useState } from 'react';

export default function AddProduct(props) {
  const [pID, setPID] = useState('');
  const [productname, setProductname] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const idChangeHandler = (event) => {
    setPID(event.target.value);
  };

  const sellingPriceChangeHandler = (event) => {
    setSellingPrice(event.target.value);
  };

  const productNameChangeHandler = (event) => {
    setProductname(event.target.value);
  };

  const addProductButtonHandler = (event) => {
    event.preventDefault();
    const newproductDetails = {
      pID,
      productname,
      sellingPrice,
    };
    if (pID !== '' && productname !== '' && sellingPrice !== '') {
      props.onSubmitHandler(newproductDetails);
    }
    setPID('');
    setProductname('');
    setSellingPrice('');
  };

  return (
    <div>
      <form onSubmit={addProductButtonHandler}>
        <div>
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            value={pID}
            onChange={idChangeHandler}
          />

          <label htmlFor="sellingPrice">Selling Price</label>
          <input
            type="number"
            id="sellingPrice"
            value={sellingPrice}
            onChange={sellingPriceChangeHandler}
          />

          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productname}
            onChange={productNameChangeHandler}
          />
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}
