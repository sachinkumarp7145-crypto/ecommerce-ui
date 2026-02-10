import { Card, Row, Col } from "antd";
import "./productGrid.scss";
import { products } from "../data/product";
import { Product } from "../types/product";
interface Props {
  title?: string;
}

const ProductGrid = ({ title = "Products" }: Props) => {
  return (
    <div className="product-grid">
      <h2 className="section-title">{title}</h2>

      <Row gutter={[16, 16]}>
        {products.map((product: Product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              }
            >
              <Card.Meta title={product.title} />
              <div className="price">₹ {product.price}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
