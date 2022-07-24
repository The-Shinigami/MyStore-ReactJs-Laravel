function SmallProduct(props) {
  var priceStyle = {
    fontWeight: "bold",
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "2px",
    border: "solid 1px black",
    borderRadius: "10px",
    };
    var infoButtonStyle = {
        position: "absolute",
        top: "10px",
        left: "10px",
        padding: "2px",
        border: "solid 1px black",
        borderRadius: "10px"
    };
  return (
    <div>
      <div className="w-full relative">
        <span style={priceStyle}>380$</span>
       {/*  <span>info</span> */}
        <img
          className="w-full h-full rounded-3xl"
          src={props.imgUrl}
          alt="product"
        ></img>
      </div>
    </div>
  );
}
export default SmallProduct;
