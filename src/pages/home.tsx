import { useCallback, useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Product, { ProductProps } from '../components/Product';
import api from '../services/api';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  const loadProducts = useCallback(async () => {
    const { data } = await api.get<ProductProps[]>('/products');

    console.log(data);

    setProducts(data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const increment = useCallback(
    async (id: number, quantity: number) => {
      await api.patch(`/products/${id}`, {
        quantity: quantity + 1,
      });

      await loadProducts();
    },
    [loadProducts],
  );
  const subtract = useCallback(
    async (id: number, quantity: number) => {
      await api.patch(`/products/${id}`, {
        quantity: quantity - 1,
      });

      await loadProducts();
    },
    [loadProducts],
  );

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              handleIncrement={increment}
              handleSubtract={subtract}
            />
          );
        })}
        <Cart
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          products={products.map((item) => ({
            ...item,
            handleIncrement: increment,
            handleSubtract: subtract,
          }))}
        />
      </Container>
    </>
  );
};

export default Home;
