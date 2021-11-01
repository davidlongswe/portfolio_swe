import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfölj</h1>
        <p className="pl-desc">
          Bläddra genom mina tidigare genomförda projekt och få en känsla av vad
          jag kan göra för dig!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
