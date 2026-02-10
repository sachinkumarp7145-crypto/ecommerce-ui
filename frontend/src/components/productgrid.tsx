import { Card, Row, Col } from "antd";
import "./productGrid.scss";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    image: "https://m.media-amazon.com/images/I/71ltns-SeoL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 4999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGkJO8iGhWl6ja-9wHdRnyIEBKvG2_lRkOQ&s",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 3999,
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/aa0bd45abac541d29ff40b492e15cfa4_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg",
  },
  {
    id: 4,
    title: "Backpack",
    price: 1999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NMHGbeEyb-0QUyQscNE5tU3ICAkfHL7wsw&s",
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <h2 className="section-title">Featured Products</h2>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} />}
            >
              <Card.Meta
                title={product.title}
                description={`₹ ${product.price}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
