import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data/shoes-data'
import { useState } from "react";
import Product from "./component/Product";

function App() {
  const [product, setProduct] = useState(data);
  return (
    <div className="App">

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
      <Row className="justify-content-md-center">
        {/* <Col> */}
        {
          product.map((p,index)=>{
            return(
              <Product product={product} index={index}/>
            )
          })

        }
        {/* </Col> */}
    
          {/* <img src='https://zzzmini.github.io/images/shoes1.jpg' width={80%}></img> */}
          {/* <img src={process.env.PUBLIC_URL+`./images/shoes${product[0].id+1}.jpg`} width={'80%'}></img>
          <h4>{product[0].title}</h4>
          <p>{product[0].content}</p> */}
        
   
          {/* <img src='https://zzzmini.github.io/images/shoes1.jpg' width={80%}></img> */}
          {/* <img src={process.env.PUBLIC_URL+`./images/shoes${product[1].id+1}.jpg`} width={'80%'}></img>
          <h4>{product[1].title}</h4>
          <p>{product[1].content}</p> */}
        
          {/* <img src='https://zzzmini.github.io/images/shoes1.jpg' width={80%}></img> */}
          {/* <img src={process.env.PUBLIC_URL+`./images/shoes${product[2].id+1}.jpg`} width={'80%'}></img>
          <h4>{product[2].title}</h4>
          <p>{product[2].content}</p> */}
     
      </Row>
    </Container>
    </div>
  );
}

export default App;
