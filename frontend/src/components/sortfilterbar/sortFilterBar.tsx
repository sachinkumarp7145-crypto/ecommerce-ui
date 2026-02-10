import { Select, Slider } from "antd";
import "./sortFilterBar.scss";

interface Props {
  sortOrder: string;
  onSortChange: (value: string) => void;
  priceRange: [number, number];
  onPriceChange: (value: [number, number]) => void;
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
        <Select.Option value="none">Sort By</Select.Option>
        <Select.Option value="price-asc">Price: Low → High</Select.Option>
        <Select.Option value="price-desc">Price: High → Low</Select.Option>
      </Select>

      <div className="price-filter">
        <span>Price Range</span>
        <Slider
          range
          min={0}
          max={10000}
          value={priceRange}
          onChange={(value) =>
        onPriceChange(value as [number, number])
          }
        />
      </div>
    </div>
  );
};

export default SortFilterBar;
