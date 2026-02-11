import { Layout, Pagination } from "antd";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useProductFilters } from "../../hooks/useProductFilters";
import "./home.scss";
import SortFilterBar from "../../components/sortfilterbar/sortFilterBar";

const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    categories,
    products,
    total,
    currentPage,
    pageSize,
    setCurrentPage,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
    priceRange,
    setPriceRange,
  } = useProductFilters();

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

          <SortFilterBar
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />

          <ProductGrid
            title="Products"
            products={products}
          />

          <Pagination
            current={currentPage}
            total={total}
            pageSize={pageSize}
            onChange={setCurrentPage}
            style={{ marginTop: 24, textAlign: "center" }}
          />
        </div>
      </Content>

      <Footer className="home-footer">© 2026 My Store</Footer>
    </Layout>
  );
};

export default Home;
