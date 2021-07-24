import React, { useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';
import { Container, Row, Col } from 'react-bootstrap';

import ProductCard from './ProductCard';

const ProductContainer = () => {
  const commerce = new Commerce(
    'pk_test_30734d5e9f9a241da741b38e4733d0c39bdaa7ad65b24'
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products
      .list()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {products.map((product) => (
            <Col sm key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductContainer;
