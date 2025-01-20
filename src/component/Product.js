import React from "react";
import Col from "react-bootstrap/Col";

function Product(props){
  let i = props.index;
  let p = props.product;

  return(
    <Col>
      <div>
      <img src={process.env.PUBLIC_URL+`./images/shoes${p[i].id+1}.jpg`} width={'80%'}></img>
            <h4>{p[i].title}</h4>
            <p>{p[i].content}</p>
    </div>
    </Col>
  )
}

export default Product;