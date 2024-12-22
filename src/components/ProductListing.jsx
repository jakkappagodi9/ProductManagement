import React from 'react';
import Button from './Button';

export default function ProductListing({
  productList,
  onClickDeleteButtonHandler,
}) {
  return (
    <div>
      <div>Products</div>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.pID}>
              {product.sellingPrice} - {product.productname}
              <Button
                pID={product.pID}
                productList={productList}
                onClick={() => onClickDeleteButtonHandler(product.pID)}
              >
                Delete Product
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
