import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductListing from './components/ProductListing';
import ProductTotalPrice from './components/ProductTotalPrice';

function App() {
  const [productList, setProductList] = useState([]);

  const onSubmitHandler = (newproductDetails) => {
    event.preventDefault();
    if (newproductDetails)
      setProductList((previousList) => [...previousList, newproductDetails]);
    localStorage.setItem(
      newproductDetails.pID,
      JSON.stringify(newproductDetails)
    );
  };
  const onClickDeleteButtonHandler = (pID) => {
    const newProductList = productList.filter((product) => product.pID !== pID);
    setProductList(newProductList);
    localStorage.removeItem(pID);
  };
  return (
    <>
      <AddProduct onSubmitHandler={onSubmitHandler} />

      <ProductListing
        productList={productList}
        onClickDeleteButtonHandler={onClickDeleteButtonHandler}
      />
      <ProductTotalPrice productList={productList} />
    </>
  );
}

export default App;
