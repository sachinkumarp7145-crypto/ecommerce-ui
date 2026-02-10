import { useState } from "react";
import { Layout } from "antd";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { products } from "../../data/product";
import "./home.scss";
import ProductGrid from "../../components/productgrid/productgrid";

const { Header, Content, Footer } = Layout;

const categories = ["All", ...new Set(products.map(p => p.category))];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <Layout className="home-layout">
      <Header className="home-header">E-Commerce</Header>

      <Content className="home-content">
        <div className="container">
          <CategoryNav
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <ProductGrid
            title={`${selectedCategory} Products`}
            products={filteredProducts}
          />
        </div>
      </Content>

      <Footer className="home-footer">© 2026 My Store</Footer>
    </Layout>
  );
};

export default Home;
