import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0A0A0A;
    position: fixed;
    transform: ${({ open }: MenuProps) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform .3s ease-in-out;
    z-index: 20;
    overflow-y: hidden;

    a {
      color: #fff;
    }
  }
`;