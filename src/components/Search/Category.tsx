import { CategorySchema } from "@/models/Blog";

const Category = ({ id, name }: CategorySchema) => (
  <option value={id}>{name}</option>
);

export default Category;
