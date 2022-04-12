import { Plus as PlusIcon } from '@styled-icons/boxicons-regular/Plus';
import { Subtract as SubtractIcon } from '@styled-icons/remix-fill/Subtract';

import { Wrapper, IconWrapper, Quantity } from './styles';

type IncrementorProps = {
  id: number;
  quantity: number;
  onIncrement: (id: number, quantity: number) => void;
  onSubtract: (id: number, quantity: number) => void;
};

const Incrementor = ({
  id,
  quantity,
  onIncrement,
  onSubtract,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper
      onClick={() => onSubtract(id, quantity)}
      disabled={quantity === 0}>
      <SubtractIcon aria-label='Subtract item' />
    </IconWrapper>

    <Quantity>{quantity}</Quantity>

    <IconWrapper onClick={() => onIncrement(id, quantity)}>
      <PlusIcon aria-label='Add item' />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
