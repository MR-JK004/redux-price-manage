import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './components/ProductCard';
import { useSelector } from 'react-redux';

const App = () => {
  const products = useSelector(state => state.products.products);
  const quantities = useSelector(state => state.products.quantities);
  const subtotal = products.reduce((sum, product) => sum + (product.price * quantities[product.id]), 0);
  const total = products.reduce((sum, product) => {
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);
    return sum + (discountedPrice * quantities[product.id]);
  }, 0);

  return (
    <Container className="App">
      <div style={{ width: '70%' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="product-summary" style={{ width: '28%' }}>
        <Row>
          <Col md={6}></Col>
          <Col md={3} className="text-right heading">
            <p>SUBTOTAL :</p>
            <p>SHIPPING :</p>
          </Col>
          <Col md={3} className="text-right">
            <p>${subtotal.toFixed(2)}</p>
            <p>FREE</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={3} className="text-right total">
            <h5>TOTAL :</h5>
          </Col>
          <Col md={3} className="text-right heading">
            <h5>${total.toFixed(2)}</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-right">
            <p className="daily-cash">Get Daily Cash With Nespola Card</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;