import tw from 'twin.macro';
import styled from '@emotion/styled';

const NavbarButton = styled.button`
  ${tw`flex items-center justify-center rounded-sm hover:bg-navbar-button mx-1 focus:outline-none text-base text-primary`}
  width: 35px;
  height: 35px;
`;
export default NavbarButton;
