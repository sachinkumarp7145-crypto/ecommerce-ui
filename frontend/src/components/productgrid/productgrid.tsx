import { Card, Row, Col } from "antd";
import { Product } from "../../types/product";
import "./productGrid.scss";

interface Props {
  title?: string;
  products: Product[];
}

const ProductGrid = ({ title = "Products", products }: Props) => {
  return (
    <div className="product-grid">
      <h2 className="section-title">{title}</h2>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
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

      {products.length === 0 && (
        <div style={{ padding: 24, textAlign: "center" }}>
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
