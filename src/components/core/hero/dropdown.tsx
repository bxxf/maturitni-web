import tw from 'twin.macro';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import DropdownContext from '@/context/dropdown';
interface IDropdownProps {
  opened: boolean;
}
const DropdownWrapper = styled.div<IDropdownProps>`
  ${tw`origin-top-right absolute left-0 mt-2 mb-6 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-main transform opacity-0 scale-95 transition ease-out duration-100`}
  ${({ opened }) =>
    opened &&
    `
    opacity: 100%;
    transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  `}
`;

const MenuItem = tw.a`block px-4 py-2 text-sm text-primary hover:text-hover`;

const Dropdown: React.FC = () => {
  const { opened } = useContext(DropdownContext);
  return (
    <DropdownWrapper opened={opened} role="menu">
      <div className="py-1" role="none">
        <MenuItem
          href="/dokumentace/Dokumentace_TvujDezert.pdf"
          role="menuitem"
        >
          PDF (105kB)
        </MenuItem>
        <MenuItem
          href="/dokumentace/Dokumentace_TvujDezert.docx"
          role="menuitem"
        >
          Docx (105kB)
        </MenuItem>
      </div>
    </DropdownWrapper>
  );
};
export default Dropdown;
