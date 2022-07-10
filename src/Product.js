const Product = (props) => {
  return (
    <>
      <h4>{props.name}</h4>
      <button
        onClick={() => {
          alert(`Produk ini bernama ${props.name}.`);
        }}
      >
        Detail
      </button>
    </>
  );
};

export default Product;
