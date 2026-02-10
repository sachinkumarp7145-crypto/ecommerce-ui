import { Tag } from "antd";
import "./categoryNav.scss";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryNav = ({ categories, selected, onSelect }: Props) => {
  return (
    <div className="category-nav">
      {categories.map((category) => (
        <Tag
          key={category}
          color={selected === category ? "blue" : undefined}
          className="category-tag"
          onClick={() => onSelect(category)}
        >
          {category}
        </Tag>
      ))}
    </div>
  );
};

export default CategoryNav;
