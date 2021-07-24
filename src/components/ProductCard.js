import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" img src={product.media.source} />
        <Card.Body>
          <Card.Title> {product.name}</Card.Title>
          <Card.Text>
            {product.price.formatted_with_symbol}
            <p> {product.description.replace(/(<([^>]+)>)/gi, '')}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
