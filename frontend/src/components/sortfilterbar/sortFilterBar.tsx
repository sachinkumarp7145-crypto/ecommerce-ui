import { Select, Slider } from "antd";
import "./sortFilterBar.scss";

const { Option } = Select;

interface Props {
  sortOrder: string;
  onSortChange: (value: string) => void;
  priceRange: [number, number];
  onPriceChange: (value: number[]) => void;
}

const SortFilterBar = ({
  sortOrder,
  onSortChange,
  priceRange,
  onPriceChange,
}: Props) => {
  return (
    <div className="sort-filter-bar">
      <Select
        value={sortOrder}
        onChange={onSortChange}
        className="sort-select"
      >
        <Option value="none">Sort By</Option>
        <Option value="price-asc">Price: Low → High</Option>
        <Option value="price-desc">Price: High → Low</Option>
      </Select>

      <div className="price-filter">
        <span>Price Range</span>
        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={onPriceChange}
        />
      </div>
    </div>
  );
};

export default SortFilterBar;
