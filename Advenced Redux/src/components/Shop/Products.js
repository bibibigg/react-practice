import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "book", description: "test1" },
  { id: "p2", price: 7, title: "photo", description: "test2" },
  { id: "p3", price: 8, title: "desk", description: "test3" },
  { id: "p4", price: 9, title: "monitor", description: "test4" },
  { id: "p5", price: 10, title: "shoose", description: "test5" },
  { id: "p6", price: 11, title: "hat", description: "test6" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
