import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <img src={product.media.source} />
          {product.name}
          {product.price.formatted_with_symbol}
          {product.description.replace(/(<([^>]+)>)/gi, '')}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
