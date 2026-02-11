import { Card, Row, Col, Rate } from "antd";
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
              className="amazon-card"
              cover={
                <div className="image-wrapper">
                  <img
                    src={product.image || "|| https://via.placeholder.com/200"}
                    alt={product.title}
                  />
                </div>
              }
            >
              <div className="card-content">
                <div className="product-title">
                  {product.title}
                </div>

                <Rate
                  disabled
                  allowHalf
                  defaultValue={product.rating}
                  style={{ fontSize: 14 }}
                />

                <div className="price">
                  ₹ {product.price}
                </div>
              </div>
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
