export default function ProductTotalPrice({ productList }) {
  const totalValue = productList.reduce((sum, product) => {
    return sum + parseInt(product.sellingPrice);
  }, 0);
  return (
    <>
      <div>{`Total Worth of the Products : ${totalValue} `}</div>
    </>
  );
}
