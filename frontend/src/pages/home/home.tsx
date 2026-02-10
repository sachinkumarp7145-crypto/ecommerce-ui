import { Layout } from "antd";
import "./home.scss";
import ProductGrid from "../../components/productgrid";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="home-layout">
      <Header className="home-header">
        E-Commerce
      </Header>

      <Content className="home-content">
        <ProductGrid />
      </Content>

      <Footer className="home-footer">
        © 2026 My Store
      </Footer>
    </Layout>
  );
};

export default Home;
