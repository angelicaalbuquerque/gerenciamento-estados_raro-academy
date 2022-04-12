import { Dispatch, SetStateAction, useMemo } from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline';

import Button from '../Button';
import Typography from '../Typography';

import { Wrapper, Subtotal, Header } from './styles';
import Product, { ProductEventProps, ProductProps } from '../Product';
import { Container } from '../Container';

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

type Type = MenuPaymentProps & {
  products: Array<ProductProps & ProductEventProps>;
};

const MenuPayment = ({ isOpen, setIsOpen, products }: Type) => {
  const totalPaymentCurrencyFormat = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(
      products.reduce(
        (accumulator, product) =>
          accumulator + product.price * product.quantity,
        0,
      ),
    );
  }, [products]);
  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size='large' fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>

      <Container>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              handleIncrement={product.handleIncrement}
              handleSubtract={product.handleSubtract}
            />
          );
        })}
      </Container>

      <Subtotal>
        <Typography level={5} size='large' fontWeight={600}>
          Total
        </Typography>
        <Typography>{totalPaymentCurrencyFormat}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  );
};

export default MenuPayment;
