import { useMemo } from 'react';
import Incrementor from '../Incrementor';
import { Wrapper, Info, Column, Text, WrapperIncrementor } from './styles';

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};

export type ProductEventProps = {
  handleIncrement: (id: number, quantity: number) => void;
  handleSubtract: (id: number, quantity: number) => void;
};

type ProductType = ProductProps & ProductEventProps;

const Product = ({
  id,
  name,
  price,
  picture,
  quantity,
  handleIncrement,
  handleSubtract,
}: ProductType) => {
  const totalPriceCurrencyFormat = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price * quantity);
  }, [price, quantity]);

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{totalPriceCurrencyFormat}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            id={id}
            quantity={quantity}
            onIncrement={handleIncrement}
            onSubtract={handleSubtract}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;
