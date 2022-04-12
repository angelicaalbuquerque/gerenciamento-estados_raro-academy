import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > h1 {
    font-size: 2.5rem;
    color: #3d3147;
  }

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    width: 3rem;
  }
`;
