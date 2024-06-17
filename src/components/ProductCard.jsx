import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import { handleQuantityChange,handleRemove } from '../Redux/ProductSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.products.quantities[product.id]);

  const handleIncrease = () => {
    dispatch(handleQuantityChange({ productId: product.id, newQuantity: quantity + 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(handleQuantityChange({ productId: product.id, newQuantity: quantity - 1 }));
    }
  };

  return (
    <div className="product-card">
      <Row>
        <Col md={3}>
          <Carousel fade>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 product-image"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <div className="product-details">
            <h5>{product.title}</h5>
            <div className="product-subdetails">
              <p><strong>Details & Core</strong></p>
              <p>{product.description}</p>
              <p><strong>Sustainability</strong></p>
            </div>
          </div>
        </Col>
        <Col md={3} className="text-right">
          <div className="product-price">
            <div className="quantity-control">
              <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity <= 1}>-</Button>
              <span className="quantity-display">{quantity}</span>
              <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
            </div>
            <h4>${(product.price).toFixed(2)}</h4>
            <Button variant="link" className="remove-button" onClick={() => dispatch(handleRemove(product.id))}>REMOVE</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
